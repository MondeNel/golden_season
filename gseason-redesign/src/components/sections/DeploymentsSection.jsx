import { deployments } from '../../data/deployments';
import Reveal from '../ui/Reveal';
import DeploymentCard from '../ui/DeploymentCard';

export default function DeploymentsSection() {
  return (
    <section id="deployments" className="py-24 px-6 bg-navy-mid">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-xs uppercase tracking-widest font-semibold">Proven in the Field</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Deployed Where It Matters Most
          </h2>
          <p className="text-muted mt-4 max-w-xl font-light">
            Golden Season solutions operate across humanitarian, military and emergency response missions worldwide.
          </p>
        </Reveal>

        <div
         className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12"
         style={{ gridAutoRows: '1fr' }}
        >
          {deployments.map((dep, idx) => (
            <Reveal key={idx} delay={idx + 1}>
              <DeploymentCard deployment={dep} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}