import { useState } from 'react';
import Reveal from '../ui/Reveal';
import { Button } from '../ui/Button';
import WhoWeAreModal from '../common/WhoWeAreModal';

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image panel */}
        <Reveal>
          <div className="rounded-14 overflow-hidden relative">
            <img
              src="https://stagingthree.fuziondevteam.co.za/wp-content/uploads/2025/07/Golden-Season-2-1024x682.webp"
              alt="Golden Season team"
              className="w-full h-56 md:h-[400px] object-cover"
              onError={(e) => { e.target.src = 'https://gseason.com/wp-content/uploads/2025/09/Military-Deployments.webp'; }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-md py-3 px-4 md:py-4 md:px-6 flex gap-0">
              {[
                { v: '30yr', l: 'In Operation' },
                { v: '50+', l: 'Countries' },
                { v: 'NATO', l: 'Certified' },
                { v: '200+', l: 'Client Orgs' },
              ].map((s, i) => (
                <div key={i} className={`${i < 3 ? 'pr-4 mr-4 md:pr-6 md:mr-6 border-r border-white/10' : ''}`}>
                  <div className="font-display text-teal-light text-sm md:text-xl font-bold">{s.v}</div>
                  <div className="text-dim text-[10px] md:text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Text content */}
        <Reveal delay={2}>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">Who We Are</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 md:mb-4">
            Engineering Lifelines <em className="text-teal-light not-italic">Since 1982</em>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-light">
            Golden Season equips defence forces, medical responders, and governmental agencies with mission-ready gear built for the world's most demanding environments.
          </p>
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {[
              'NATO/STANAG-compliant products tested across six continents',
              'Multi-language support in English, German, Italian',
              'Global supply chain with rapid-deployment logistics',
              'Dedicated R&D and compliance testing',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 md:gap-3">
                <span className="w-4 h-4 md:w-5 md:h-5 mt-0.5 bg-teal-dim border border-teal/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ti ti-check text-teal text-[10px] md:text-xs"></i>
                </span>
                <span className="text-xs md:text-sm text-muted">{text}</span>
              </li>
            ))}
          </ul>
          <Button onClick={() => setModalOpen(true)} variant="primary" size="sm">
            Our full story <i className="ti ti-arrow-right"></i>
          </Button>
        </Reveal>
      </div>

      <WhoWeAreModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}