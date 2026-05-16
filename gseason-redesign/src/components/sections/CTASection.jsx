import Reveal from '../ui/Reveal';
import { Button } from '../ui/Button';

export default function CTASection() {
  return (
    <section className="relative min-h-[320px] flex items-center py-24">
      <img
        src="https://gseason.com/wp-content/uploads/2025/09/Military-Deployments.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />
      <div className="absolute inset-0 bg-navy/90"></div>
      <Reveal className="relative z-10 w-full text-center px-6">
        <span className="inline-block text-teal text-xs uppercase tracking-widest font-semibold mb-4">
          Get Started
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to Equip Your Mission?
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8 font-light">
          Contact our global support team for tailored solutions, rapid‑response logistics, and mission‑critical support — wherever your operations take you.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <Button href="https://gseason.com/global-support/" variant="primary">
            <i className="ti ti-headset"></i> Contact Global Support
          </Button>
          <Button href="https://wa.me/27726390021" variant="outline">
            <i className="ti ti-brand-whatsapp"></i> Chat on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}