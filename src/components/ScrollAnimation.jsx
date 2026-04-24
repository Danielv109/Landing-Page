import { useInView } from 'react-intersection-observer';

export default function ScrollAnimation({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${inView ? 'is-visible' : ''} ${delay ? `delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
