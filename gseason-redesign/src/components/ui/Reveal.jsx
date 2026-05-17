import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay * 0.1}s` : '0s' }}
    >
      {children}
    </div>
  );
}