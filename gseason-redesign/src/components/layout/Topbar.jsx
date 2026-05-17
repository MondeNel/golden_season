import { useState } from 'react';

const FLAGS = {
  EN: 'https://flagcdn.com/w40/gb.png',
  DE: 'https://flagcdn.com/w40/de.png',
  IT: 'https://flagcdn.com/w40/it.png',
};

export default function Topbar() {
  const [tooltipLang, setTooltipLang] = useState(null);

  const handleFlagClick = (lang) => {
    if (lang === 'EN') return;
    setTooltipLang(lang);
    setTimeout(() => setTooltipLang(null), 2000);
  };

  return (
    <div className="bg-navy-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2.5 px-4 md:px-6 text-base text-dim">
        {/* Left: contact info (hidden on mobile) */}
        <div className="hidden sm:flex gap-6 items-center">
          <span className="flex items-center gap-1.5">
            <i className="ti ti-phone text-teal text-lg"></i>
            (65) 6863 2228
          </span>
          <span className="flex items-center gap-1.5">
            <i className="ti ti-mail text-teal text-lg"></i>
            info@goldenseason.com.sg
          </span>
        </div>

        {/* Right: flags + social icons – centred on mobile */}
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto gap-3 md:gap-4">
          {/* UK flag (active) */}
          <button
            onClick={() => handleFlagClick('EN')}
            className="shrink-0 cursor-default"
            title="English"
            aria-label="English"
          >
            <img
              src={FLAGS.EN}
              alt="English"
              className="w-6 h-4 md:w-7 md:h-5 object-cover rounded-sm"
            />
          </button>

          {/* German flag */}
          <div className="relative flex items-center">
            <button
              onClick={() => handleFlagClick('DE')}
              className="shrink-0 hover:scale-110 transition-transform"
              title="German"
              aria-label="German"
            >
              <img
                src={FLAGS.DE}
                alt="German"
                className="w-6 h-4 md:w-7 md:h-5 object-cover rounded-sm"
              />
            </button>
            {tooltipLang === 'DE' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-navy-light border border-white/20 text-white text-sm px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50">
                German version coming soon
              </span>
            )}
          </div>

          {/* Italian flag */}
          <div className="relative flex items-center">
            <button
              onClick={() => handleFlagClick('IT')}
              className="shrink-0 hover:scale-110 transition-transform"
              title="Italian"
              aria-label="Italian"
            >
              <img
                src={FLAGS.IT}
                alt="Italian"
                className="w-6 h-4 md:w-7 md:h-5 object-cover rounded-sm"
              />
            </button>
            {tooltipLang === 'IT' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-navy-light border border-white/20 text-white text-sm px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50">
                Italian version coming soon
              </span>
            )}
          </div>

          {/* Divider – hidden on tiny screens, visible sm+ */}
          <span className="hidden sm:block w-px h-5 bg-white/10 mx-1" />

          {/* Social icons – smaller on mobile, same visual weight */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://web.facebook.com/GoldenSeasonSG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-teal-light transition-colors"
              aria-label="Facebook"
            >
              <i className="ti ti-brand-facebook text-lg md:text-xl"></i>
            </a>
            <a
              href="https://x.com/GoldenSeasonSG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-teal-light transition-colors"
              aria-label="X (Twitter)"
            >
              <i className="ti ti-brand-x text-lg md:text-xl"></i>
            </a>
            <a
              href="https://youtube.com/@goldenseason1691"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-teal-light transition-colors"
              aria-label="YouTube"
            >
              <i className="ti ti-brand-youtube text-lg md:text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}