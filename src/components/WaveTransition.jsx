export default function WaveTransition({ from = '#fff', to = '#000', flip = false }) {
  return (
    <div className={`wave-transition ${flip ? 'wave-transition--bottom' : 'wave-transition--top'}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.5"
        />
        <path
          d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,60 1440,80 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.7"
        />
        <path
          d="M0,90 C180,70 360,110 540,85 C720,60 900,100 1080,75 C1260,50 1380,90 1440,90 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}