import { useEffect, useRef } from 'react';

const NODE_COUNT = 110;
const MAX_DIST   = 140;
const SPHERE_R   = 0.42;
const MOUSE_R    = 0.36;
const DRAG_STR   = 0.30;
const DAMPING    = 0.94;
const ROT_X      = 0.0004;
const ROT_Y      = 0.0008;
const MAX_VEL    = 28; // clamp to prevent explosion on fast mouse moves

function buildNodes() {
  return Array.from({ length: NODE_COUNT }, () => {
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    return {
      ox: Math.sin(phi) * Math.cos(theta),
      oy: Math.sin(phi) * Math.sin(theta),
      oz: Math.cos(phi),
      dx: 0,
      dy: 0,
    };
  });
}

function project(ox, oy, oz, ax, ay, cx, cy, sphereR) {
  const cosY = Math.cos(ay), sinY = Math.sin(ay);
  const x1 = ox * cosY - oz * sinY;
  const z1 = ox * sinY + oz * cosY;

  const cosX = Math.cos(ax), sinX = Math.sin(ax);
  const y1 =  oy * cosX + z1 * sinX;
  const z2 = -oy * sinX + z1 * cosX;

  const s = 3 / (3 + z2 + 1);
  return { x: cx + x1 * sphereR * s, y: cy + y1 * sphereR * s, z: z2 };
}

export default function HeroSphere() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999, vx: 0, vy: 0 });
  const stateRef  = useRef({ ax: 0, ay: 0, nodes: buildNodes() });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let rafId, w, h, cx, cy, sphereR, mouseR;

    function resize() {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      cx = w / 2;
      cy = h / 2;
      sphereR = Math.min(w, h) * SPHERE_R;
      mouseR  = Math.min(w, h) * MOUSE_R;
    }

    function frame() {
      stateRef.current.ax += ROT_X;
      stateRef.current.ay += ROT_Y;
      const { ax, ay, nodes } = stateRef.current;

      ctx.clearRect(0, 0, w, h);

      const { x: mx, y: my, vx: mvx, vy: mvy } = mouseRef.current;
      mouseRef.current.vx *= 0.78;
      mouseRef.current.vy *= 0.78;

      const pts = nodes.map(n => {
        const p  = project(n.ox, n.oy, n.oz, ax, ay, cx, cy, sphereR);
        const px = p.x + n.dx;
        const py = p.y + n.dy;

        const d = Math.hypot(mx - px, my - py);
        if (d < mouseR) {
          const t = 1 - d / mouseR;
          n.dx += mvx * t * DRAG_STR;
          n.dy += mvy * t * DRAG_STR;
        }
        n.dx *= DAMPING;
        n.dy *= DAMPING;

        return { x: px, y: py, z: p.z };
      });

      // edges — más visibles, alpha mayor para compensar la ausencia del glow
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_DIST) {
            const depth = ((a.z + b.z) / 2 + 1) / 2;
            const alpha = (1 - dist / MAX_DIST) * 0.75 * depth;
            const r = Math.round(100 - depth * 40);
            const g = Math.round(130 - depth * 40);
            ctx.strokeStyle = `rgba(${r},${g},255,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.5 + depth * 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodos — más grandes y brillantes para sostener la forma visualmente
      for (const p of pts) {
        const depth = (p.z + 1) / 2;
        const r = 1.5 + depth * 3.5;

        // halo difuso
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 160, 255, ${(0.03 + depth * 0.06).toFixed(3)})`;
        ctx.fill();

        // anillo intermedio
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 255, ${(0.08 + depth * 0.12).toFixed(3)})`;
        ctx.fill();

        // núcleo blanco brillante
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.5 + depth * 0.5).toFixed(3)})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(frame);
    }

    resize();
    frame();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  function onMouseMove(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const nx = e.clientX - rect.left;
    const ny = e.clientY - rect.top;
    // clamp velocity so fast mouse sweeps don't explode the nodes
    mouseRef.current.vx = Math.max(-MAX_VEL, Math.min(MAX_VEL, nx - mouseRef.current.x));
    mouseRef.current.vy = Math.max(-MAX_VEL, Math.min(MAX_VEL, ny - mouseRef.current.y));
    mouseRef.current.x  = nx;
    mouseRef.current.y  = ny;
  }

  function onMouseLeave() {
    mouseRef.current.x  = -9999;
    mouseRef.current.y  = -9999;
    // let vx/vy decay naturally instead of hard-resetting to 0
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    />
  );
}
