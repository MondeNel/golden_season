import { whyChoose } from '../../data/whyChoose';
import Reveal from '../ui/Reveal';

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            Why Choose Our Services
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
            What Makes Golden Season Different
          </h2>
          <p className="text-muted text-xs md:text-sm mt-2 md:mt-4 max-w-xl font-light">
            From NATO‑certified quality to global logistics, here’s why organisations depend on us for mission‑critical equipment.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {whyChoose.map((item, idx) => (
            <Reveal key={idx} delay={(idx % 3) + 1}>
              <div className="bg-navy-light border border-white/10 rounded-14 p-4 md:p-6 hover:border-teal/40 hover:-translate-y-1 transition-all">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-teal-dim border border-teal/30 rounded-full flex items-center justify-center font-display text-xs md:text-sm font-bold text-teal-light mb-3 md:mb-4">
                  {item.num}
                </div>
                <h4 className="font-display text-sm md:text-base font-semibold text-white mb-1.5">{item.title}</h4>
                <p className="text-[11px] md:text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}