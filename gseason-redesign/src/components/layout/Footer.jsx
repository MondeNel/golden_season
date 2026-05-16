export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" className="w-8 h-8 rounded-md bg-white p-0.5 object-contain" alt="Golden Season" />
            <div className="font-display text-lg font-bold text-[#c8d8e8]">Golden <em className="text-teal not-italic">Season</em></div>
          </div>
          <p className="text-[#3a5a74] text-sm leading-relaxed mb-4 max-w-xs">Engineering lifelines for humanitarian, military and emergency response deployments since 1994.</p>
          <div className="flex gap-3">
            {[
              { icon: 'ti-brand-facebook', href: '#' },
              { icon: 'ti-brand-x', href: '#' },
              { icon: 'ti-brand-youtube', href: '#' },
              { icon: 'ti-brand-linkedin', href: '#' },
            ].map((social, i) => (
              <a key={i} href={social.href} className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal/20 hover:border-teal/40 transition group">
                <i className={`ti ${social.icon} text-dim group-hover:text-teal-light`}></i>
              </a>
            ))}
          </div>
        </div>
        {[
          {
            title: 'Products',
            links: ['Medical & Rescue', 'Ammo Containers', 'Mobile Shelter', 'Water Filtration', 'Batteries & Chargers'],
          },
          {
            title: 'Company',
            links: ['Who We Are', 'Mission & Vision', 'News & Insights', 'Innovation', 'Global Support'],
          },
          {
            title: 'Contact',
            links: ['+65 6863 2228', 'info@goldenseason.com.sg', 'WhatsApp Us', 'Request a Quote', 'Privacy Policy'],
          },
        ].map((col, i) => (
          <div key={i}>
            <h5 className="font-display text-[#7a9ab4] text-sm font-semibold mb-4 uppercase tracking-wide">{col.title}</h5>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j}><a href="#" className="text-[#3a5a74] text-sm hover:text-teal-light transition">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#2a4a64] text-xs">
        <div>© 2026 Golden <em className="text-teal not-italic">Season</em>. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal-light transition">Privacy</a>
          <a href="#" className="hover:text-teal-light transition">Terms</a>
          <a href="#" className="hover:text-teal-light transition">Newsletters</a>
        </div>
      </div>
    </footer>
  );
}