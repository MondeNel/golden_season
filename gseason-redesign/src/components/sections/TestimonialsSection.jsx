import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import Reveal from '../ui/Reveal';
import NewsInsightsModal from '../common/NewsInsightsModal';

export default function TestimonialsSection() {
  const [insightsOpen, setInsightsOpen] = useState(false);

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            Client Testimonials
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2a3a] mt-1 md:mt-2">
            Trusted by the People on the Ground
          </h2>
          <p className="text-[#64748b] text-xs md:text-base mt-2 md:mt-4 max-w-xl font-light">
            From frontline medics to procurement directors — hear what organisations that depend on Golden Season say.
          </p>
        </Reveal>

        {/* Rating bar – compact on mobile */}
        <Reveal className="mt-8 md:mt-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Overall score */}
            <div className="flex items-center gap-3 md:gap-4 pr-0 lg:pr-6 lg:border-r border-gray-200">
              <span className="font-display text-4xl md:text-5xl font-bold text-[#1a2a3a]">4.9</span>
              <div>
                <div className="text-gold text-base md:text-lg">★★★★★</div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">Based on 94 reviews</p>
              </div>
            </div>

            {/* Rating bars */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 w-full">
              {[
                { label: 'Product quality', pct: 98 },
                { label: 'Delivery reliability', pct: 95 },
                { label: 'Technical support', pct: 93 },
                { label: 'Value for mission', pct: 96 },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <span className="text-[10px] md:text-xs text-gray-500 w-24 md:w-32">{r.label}</span>
                  <div className="flex-1 h-1 md:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal rounded-full transition-all duration-1000" style={{ width: `${r.pct}%` }}></div>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-500 w-5 md:w-6 text-right">{(r.pct/20).toFixed(1)}</span>
                </div>
              ))}
            </div>

            {/* Review sources */}
            <div className="flex flex-row lg:flex-col gap-3 md:gap-2 pl-0 lg:pl-6 lg:border-l border-gray-200 w-full lg:w-auto">
              <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-600"><i className="ti ti-brand-google text-base md:text-lg text-[#4285F4]"></i> Google ★ 4.9</div>
              <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-600"><i className="ti ti-brand-linkedin text-base md:text-lg text-[#0A66C2]"></i> LinkedIn ★ 5.0</div>
              <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-600"><i className="ti ti-certificate text-base md:text-lg text-teal"></i> 94 verified</div>
            </div>
          </div>
        </Reveal>

        {/* Testimonial cards – 1 column on mobile, 2 on sm, 3 on lg */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
          style={{ gridAutoRows: '1fr' }}
        >
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx % 3} className="h-full">
              <div
                className={`h-full flex flex-col bg-white rounded-2xl p-4 md:p-6 border relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  t.featured ? 'border-teal/40' : 'border-gray-200'
                }`}
              >
                {t.featured && (
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-0.5 bg-teal/10 text-teal text-[10px] rounded-full border border-teal/30">
                    Featured
                  </span>
                )}
                <div className="text-gold text-sm md:text-base mb-2 md:mb-3">★★★★★</div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3 md:mb-4 flex-1 font-light">
                  “{t.quote}”
                </p>
                {t.video && (
                  <button
                    onClick={() => window.open('https://youtube.com/@goldenseason1691', '_blank')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-teal/10 border border-teal/30 rounded-lg text-teal text-[10px] md:text-xs font-medium hover:bg-teal/20 transition mb-3 md:mb-4"
                  >
                    <i className="ti ti-player-play text-xs md:text-sm"></i> Watch video
                  </button>
                )}
                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-100 mt-auto">
                  {/* Avatar */}
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center relative">
                    {t.avatarImg ? (
                      <img
                        src={t.avatarImg}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = t.avatarBg;
                          e.target.parentElement.innerHTML = `<span style="color:${t.avatarColor};font-weight:bold;font-family:'Syne',sans-serif;font-size:11px">${t.avatar}</span>`;
                        }}
                      />
                    ) : (
                      <span className="font-display text-[11px] md:text-sm font-bold" style={{ color: t.avatarColor }}>
                        {t.avatar}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-[10px] md:text-xs text-gray-500">{t.role}</div>
                    <span
                      className={`inline-block text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded mt-1 font-medium ${
                        t.orgClass === 'org-mil'
                          ? 'bg-navy/10 text-navy'
                          : t.orgClass === 'org-hum'
                          ? 'bg-teal/10 text-teal'
                          : t.orgClass === 'org-gov'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-orange-50 text-orange-700'
                      }`}
                    >
                      {t.org}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Case study strip – compact */}
        <Reveal className="mt-6 md:mt-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs md:text-sm font-medium text-gray-500 pr-3 md:pr-4 border-r border-gray-200">
              Read case studies
            </span>
            <div className="flex flex-wrap gap-1.5 md:gap-2 flex-1">
              {['Nepal Earthquake 2024', 'NATO Baltic Storm', 'SCDF Rollout', 'WFP Sudan'].map((cs) => (
                <span
                  key={cs}
                  className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] md:text-xs text-gray-700 cursor-pointer hover:border-teal/40 hover:bg-teal/5 transition"
                >
                  {cs}
                </span>
              ))}
            </div>
            <button
              onClick={() => setInsightsOpen(true)}
              className="text-teal text-xs md:text-sm font-medium hover:underline"
            >
              View all →
            </button>
          </div>
        </Reveal>
      </div>

      <NewsInsightsModal isOpen={insightsOpen} onClose={() => setInsightsOpen(false)} />
    </section>
  );
}