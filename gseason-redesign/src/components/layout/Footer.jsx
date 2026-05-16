export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              className="w-8 h-8 rounded-md bg-white p-0.5 object-contain"
              alt="Golden Season"
            />
            <div className="font-display text-lg font-bold text-[#c8d8e8]">
              Golden <em className="text-teal not-italic">Season</em>
            </div>
          </div>
          <p className="text-[#3a5a74] text-sm leading-relaxed mb-4 max-w-xs">
            Engineering lifelines for humanitarian, military and emergency response deployments since 1982.
          </p>
          <div className="flex gap-3">
            <a
              href="https://web.facebook.com/GoldenSeasonSG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal/20 hover:border-teal/40 transition group"
            >
              <i className="ti ti-brand-facebook text-dim group-hover:text-teal-light"></i>
            </a>
            <a
              href="https://x.com/GoldenSeasonSG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal/20 hover:border-teal/40 transition group"
            >
              <i className="ti ti-brand-x text-dim group-hover:text-teal-light"></i>
            </a>
            <a
              href="https://youtube.com/@goldenseason1691"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal/20 hover:border-teal/40 transition group"
            >
              <i className="ti ti-brand-youtube text-dim group-hover:text-teal-light"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/golden-season/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal/20 hover:border-teal/40 transition group"
            >
              <i className="ti ti-brand-linkedin text-dim group-hover:text-teal-light"></i>
            </a>
          </div>
        </div>

        {/* Products column */}
        <div>
          <h5 className="font-display text-[#7a9ab4] text-sm font-semibold mb-4 uppercase tracking-wide">
            Products
          </h5>
          <ul className="space-y-2">
            <li><a href="https://gseason.com/medical-rescue/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Medical & Rescue</a></li>
            <li><a href="https://gseason.com/ammunition-containers/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Ammo Containers</a></li>
            <li><a href="https://gseason.com/mobile-shelter-systems/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Mobile Shelter</a></li>
            <li><a href="https://gseason.com/water-filtration-systems/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Water Filtration</a></li>
            <li><a href="https://gseason.com/batteries-chargers/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Batteries & Chargers</a></li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h5 className="font-display text-[#7a9ab4] text-sm font-semibold mb-4 uppercase tracking-wide">
            Company
          </h5>
          <ul className="space-y-2">
            <li><a href="#about" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Who We Are</a></li>
            <li><a href="https://gseason.com/who-we-are/#mission-vision" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Mission & Vision</a></li>
            <li><a href="#testimonials" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">News & Insights</a></li>
            <li><a href="https://gseason.com/innovation-resources/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Innovation</a></li>
            <li><a href="https://gseason.com/global-support/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Global Support</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h5 className="font-display text-[#7a9ab4] text-sm font-semibold mb-4 uppercase tracking-wide">
            Contact
          </h5>
          <ul className="space-y-2">
            <li><a href="tel:+6568632228" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">+65 6863 2228</a></li>
            <li><a href="mailto:info@goldenseason.com.sg" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">info@goldenseason.com.sg</a></li>
            <li><a href="https://wa.me/27726390021" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">WhatsApp Us</a></li>
            <li><a href="https://gseason.com/request-quote/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Request a Quote</a></li>
            <li><a href="https://gseason.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#3a5a74] text-sm hover:text-teal-light transition-colors font-light">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#2a4a64] text-xs">
        <div>© 2025 Golden <em className="text-teal not-italic">Season</em>. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="https://gseason.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition">Privacy</a>
          <a href="https://gseason.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition">Terms of Use</a>
          <a href="https://gseason.com/newsletters/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition">Newsletters</a>
        </div>
      </div>
    </footer>
  );
}