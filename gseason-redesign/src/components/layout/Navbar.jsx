import { useActiveSection } from '../../hooks/useActiveSection';
import Button from '../ui/Button';

export default function Navbar() {
  const navItems = [
    { id: 'about', label: 'Who We Are' },
    { id: 'products', label: 'Products' },
    { id: 'deployments', label: 'Deployments' },
    { id: 'clients', label: 'Clients' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Support' },
  ];

  const active = useActiveSection(navItems.map(item => item.id));

  return (
    <nav className="sticky top-0 z-50 bg-navy-mid/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="flex items-center justify-between h-[68px] px-10 max-w-[1440px] mx-auto">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="w-10 h-10 rounded-md bg-white p-1" alt="Golden Season" />
          <div>
            <div className="font-display text-lg font-bold text-white leading-tight">Golden Season</div>
            <div className="text-teal-light text-[10px] tracking-[1.2px] uppercase">Engineering Lifelines</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`h-[68px] px-4 flex items-center border-b-2 text-sm transition-colors ${
                active === item.id
                  ? 'text-white border-teal'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-400 cursor-pointer hover:bg-white/10">
            <i className="ti ti-search"></i> Search
          </div>
          <Button href="https://gseason.com/request-quote/" variant="primary" size="sm">
            Request a Quote →
          </Button>
        </div>
      </div>
    </nav>
  );
}