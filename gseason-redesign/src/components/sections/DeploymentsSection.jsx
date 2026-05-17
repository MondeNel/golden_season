import { deployments } from '../../data/deployments';
import Reveal from '../ui/Reveal';
import DeploymentCard from '../ui/DeploymentCard';

export default function DeploymentsSection() {
  return (
    <section id="deployments" className="py-16 md:py-24 px-6 bg-navy-mid">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">Proven in the Field</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2">
            Deployed Where It Matters Most
          </h2>
          <p className="text-muted text-xs md:text-base mt-2 md:mt-4 max-w-xl font-light">
            Golden Season solutions operate across humanitarian, military and emergency response missions worldwide.
          </p>
        </Reveal>

        {/* 2 columns on mobile, 3 on larger screens */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 mt-8 md:mt-12"
          style={{ gridAutoRows: '1fr' }}
        >
          {deployments.map((dep, idx) => (
            <Reveal key={idx} delay={idx + 1} className="h-full">
              <DeploymentCard deployment={dep} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}