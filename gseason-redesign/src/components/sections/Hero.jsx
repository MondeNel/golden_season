import { Button } from '../ui/Button';

export default function Hero() {
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
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute right-[8%] top-[20%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 w-full max-w-3xl px-6 md:px-12 py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-dim border border-teal/40 rounded-full text-teal-light text-xs uppercase tracking-wider mb-6 animate-fade-up">
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse-dot" />
          Trusted by Military & Humanitarian Organisations
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-6">
          Engineering<br />
          <em className="text-teal-light not-italic">Lifelines</em><br />
          for the Field
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
          Premium tactical medical supplies, trauma kits, and emergency solutions built to NATO/STANAG standards — deployed where it matters most.
        </p>
        <div className="flex flex-wrap gap-4 mb-14">
          <Button href="#products" variant="primary"><i className="ti ti-packages"></i> Explore Products</Button>
          <Button href="#contact" variant="outline"><i className="ti ti-message-circle"></i> Chat with Us</Button>
        </div>
        <div className="flex gap-0 border-t border-white/[0.1] pt-8">
          {[
            { value: '50', suffix: '+', label: 'Countries Supplied' },
            { value: '30', suffix: 'yr', label: 'Field Experience' },
            { value: 'NATO', suffix: '', label: 'Certified Standards' },
            { value: '24/7', suffix: '', label: 'Global Support' },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col ${i < 3 ? 'pr-8 mr-8 border-r border-white/[0.08]' : ''}`}>
              <span className="font-display text-2xl md:text-3xl font-bold text-white">
                {stat.value}{stat.suffix && <em className="text-teal not-italic">{stat.suffix}</em>}
              </span>
              <span className="text-dim text-xs uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => window.open('https://youtube.com/@goldenseason1691', '_blank')}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center gap-3 bg-navy/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 hover:bg-teal/20 hover:border-teal/50 transition-all group"
      >
        <span className="w-9 h-9 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <i className="ti ti-brand-youtube text-white text-lg"></i>
        </span>
        <div className="text-left">
          <strong className="block text-sm text-white font-semibold">Watch our story</strong>
          <span className="text-xs text-gray-400">See Golden Season in the field</span>
        </div>
      </button>
    </section>
  );
}