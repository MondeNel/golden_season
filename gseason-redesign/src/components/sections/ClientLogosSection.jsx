import Reveal from '../ui/Reveal';
import Ticker from '../ui/Ticker';
import { clientLogos } from '../../data/clients';

const sectors = [
  'Military & Defence',
  'Humanitarian Aid',
  'Emergency Services',
  'Government & Civil Defence',
  'International NGOs',
  'Disaster Relief',
];

export default function ClientLogosSection() {
  return (
    <section id="clients" className="py-16 md:py-24 px-4 md:px-6 bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 mb-8 md:mb-10">
          <Reveal>
            <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
              Trusted Clients
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
              Organisations That Rely on Golden Season
            </h2>
          </Reveal>

          {/* Stats – horizontal on mobile, vertical on desktop */}
          <div className="flex gap-6 md:gap-8">
            {[
              { v: '50+', l: 'Countries' },
              { v: '200+', l: 'Client Orgs' },
              { v: '30yr', l: 'Track record' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-teal-light text-xl md:text-2xl font-bold">{s.v}</div>
                <div className="text-dim text-[10px] md:text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker */}
        <Ticker items={clientLogos} />

        {/* Sector badges */}
        <Reveal>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-6 md:mt-8">
            {sectors.map((sector, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-3 py-1 md:px-4 md:py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs text-gray-400 hover:bg-teal/10 hover:border-teal/40 hover:text-white transition cursor-pointer"
              >
                <i className="ti ti-shield text-teal text-xs md:text-sm"></i> {sector}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}