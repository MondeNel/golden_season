const variants = {
  primary: 'bg-teal text-white hover:bg-teal/90 shadow-lg shadow-teal/20',
  outline: 'bg-transparent text-teal-light border border-teal-light/40 hover:bg-teal-light/10 hover:border-teal-light/70',
};

export function Button({ href, variant = 'primary', children, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 font-body';
  const Comp = href ? 'a' : 'button';
  return (
    <Comp href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}