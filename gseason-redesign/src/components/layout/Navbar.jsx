import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../ui/Button';
import QuoteRequestModal from '../common/QuoteRequestModal';
import SearchModal from '../common/SearchModal';

const NAV_ITEMS = [
  { id: 'about', label: 'Who We Are' },
  { id: 'products', label: 'Products' },
  { id: 'deployments', label: 'Deployments' },
  { id: 'clients', label: 'Clients' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Support' },
];

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map(i => i.id));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const handleSearchAction = (action) => {
    if (action === 'open-quote') setQuoteOpen(true);
    if (action === 'open-whatsapp') window.open('https://wa.me/6568632228', '_blank');
    if (action === 'open-video') window.open('https://youtube.com/@goldenseason1691', '_blank');
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-mid/90 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-navy-mid backdrop-blur-sm'
        } border-b border-white/[0.08]`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-[68px]">
          {/* Logo – text only */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="https://gseason.com/wp-content/uploads/2025/09/cropped-Gseason-Favicon-270x270.png"
              className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white p-0.5 object-contain"
              alt="Golden Season"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="leading-tight">
              <div className="font-display text-base md:text-lg font-bold text-white tracking-tight">
                Golden Season
              </div>
              <div className="text-teal-light text-[9px] md:text-[10px] uppercase tracking-[1.5px]">
                Engineering Lifelines
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center h-full ml-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative h-full px-4 flex items-center text-sm font-medium transition-colors ${
                  active === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-teal transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Right side – desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-gray-400 hover:bg-white/10 transition"
            >
              <i className="ti ti-search text-base"></i>
              <span>Search</span>
              <kbd className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-xs text-dim ml-1 hidden xl:inline">
                ⌘K
              </kbd>
            </button>
            <Button onClick={() => setQuoteOpen(true)} variant="primary" size="sm">
              Request a Quote →
            </Button>
          </div>

          {/* Mobile controls: search + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-white transition"
              aria-label="Search"
            >
              <i className="ti ti-search text-xl"></i>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-400 hover:text-white transition"
              aria-label="Menu"
            >
              <i className={`ti ${mobileOpen ? 'ti-x' : 'ti-menu-2'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-navy-mid border-t border-white/[0.08] px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-teal/10 text-teal-light border-l-2 border-teal'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <button
                onClick={() => {
                  handleNavClick();
                  setSearchOpen(true);
                }}
                className="w-full flex items-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:bg-white/10 transition"
              >
                <i className="ti ti-search text-base"></i> Search
              </button>
              <Button
                onClick={() => {
                  handleNavClick();
                  setQuoteOpen(true);
                }}
                variant="primary"
                className="w-full justify-center"
              >
                Request a Quote →
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <QuoteRequestModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAction={handleSearchAction}
      />
    </>
  );
}