import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = delay === 1 ? 'reveal-delay-1' : delay === 2 ? 'reveal-delay-2' : delay === 3 ? 'reveal-delay-3' : delay === 4 ? 'reveal-delay-4' : '';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay * 0.1}s` : '0s' }}
    >
      {children}
    </div>
  );
}