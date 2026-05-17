import Reveal from '../ui/Reveal';
import { Button } from '../ui/Button';

export default function CTASection() {
  return (
    <section className="relative min-h-[280px] md:min-h-[320px] flex items-center py-16 md:py-24">
      <img
        src="https://gseason.com/wp-content/uploads/2025/09/Military-Deployments.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />
      <div className="absolute inset-0 bg-navy/90"></div>
      <Reveal className="relative z-10 w-full text-center px-6">
        <span className="inline-block text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-3 md:mb-4">
          Get Started
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          Ready to Equip Your Mission?
        </h2>
        <p className="text-muted text-xs md:text-base max-w-xl mx-auto mb-6 md:mb-8 font-light">
          Contact our global support team for tailored solutions, rapid‑response logistics, and mission‑critical support — wherever your operations take you.
        </p>
        <div className="flex justify-center flex-wrap gap-3 md:gap-4">
          <Button href="https://gseason.com/global-support/" variant="primary" size="sm">
            <i className="ti ti-headset"></i> Contact Global Support
          </Button>
          <Button href="https://wa.me/27726390021" variant="outline" size="sm">
            <i className="ti ti-brand-whatsapp"></i> Chat on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}