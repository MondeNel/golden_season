import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';

const FULL_DESC =
  "Premium tactical medical supplies, trauma kits, and emergency solutions built to NATO/STANAG standards — deployed where it matters most.";

export default function Hero() {
  const [desc, setDesc] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDesc('');

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= FULL_DESC.length) {
        setDesc(FULL_DESC.slice(0, indexRef.current));
      } else {
        clearInterval(interval);
      }
    }, 35); // speed – adjust to taste

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      <img
        src="https://gseason.com/wp-content/uploads/2025/09/Military-Deployments.webp"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-55"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute right-[8%] top-[20%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 w-full max-w-3xl px-4 md:px-12 py-20 md:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-dim border border-teal/40 rounded-full text-teal-light text-[10px] md:text-xs uppercase tracking-wider mb-6 animate-fade-up">
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse-dot" />
          Trusted by Military & Humanitarian Organisations
        </div>

        {/* Static heading */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-4 md:mb-6">
          Engineering<br />
          <em className="text-teal-light not-italic">Lifelines</em><br />
          for the Field
        </h1>

        {/* Animated description only */}
        <p className="text-muted text-sm md:text-lg max-w-lg mb-8 md:mb-10 font-light leading-relaxed min-h-[4.5rem]">
          {desc}
          <span className="animate-pulse text-teal">|</span>
        </p>

        <div className="flex flex-wrap gap-3 mb-10 md:mb-14 animate-fade-up">
          <Button href="#products" variant="primary">
            <i className="ti ti-packages"></i> Explore Products
          </Button>
          <Button href="#contact" variant="outline">
            <i className="ti ti-message-circle"></i> Chat with Us
          </Button>
        </div>

        <div className="flex gap-0 border-t border-white/[0.1] pt-6 md:pt-8 animate-fade-up">
          {[
            { value: '50', suffix: '+', label: 'Countries' },
            { value: '30', suffix: 'yr', label: 'Experience' },
            { value: 'NATO', suffix: '', label: 'Certified' },
            { value: '24/7', suffix: '', label: 'Support' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col ${i < 3 ? 'pr-5 mr-5 md:pr-8 md:mr-8 border-r border-white/[0.08]' : ''}`}
            >
              <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white">
                {stat.value}
                {stat.suffix && <em className="text-teal not-italic">{stat.suffix}</em>}
              </span>
              <span className="text-dim text-[10px] md:text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.open('https://youtube.com/@goldenseason1691', '_blank')}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex items-center gap-2 bg-navy/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-2.5 hover:bg-teal/20 hover:border-teal/50 transition-all group"
      >
        <span className="w-6 h-6 md:w-9 md:h-9 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <i className="ti ti-brand-youtube text-white text-xs md:text-lg"></i>
        </span>
        <div className="text-left">
          <strong className="block text-xs md:text-sm text-white font-semibold">Watch our story</strong>
          <span className="text-[10px] md:text-xs text-gray-400">See Golden Season in the field</span>
        </div>
      </button>
    </section>
  );
}