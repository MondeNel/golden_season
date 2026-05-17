import { team } from '../../data/team';
import Reveal from '../ui/Reveal';

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 px-6 bg-navy-mid">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            Our Team
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
            Leadership at Golden Season
          </h2>
          <p className="text-muted text-xs md:text-base mt-2 md:mt-4 max-w-xl font-light">
            Meet the people behind the mission — dedicated professionals committed to equipping those who serve on the front lines.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {team.map((member, idx) => (
            <Reveal key={idx} delay={(idx % 3) + 1}>
              <div className="bg-navy-light border border-white/10 rounded-14 p-6 hover:border-teal/40 hover:-translate-y-1 transition-all text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-teal/30"
                />
                <h3 className="font-display text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-teal-light text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-muted text-xs leading-relaxed mt-3">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-teal-light text-xs font-medium hover:text-white transition-colors"
                  >
                    <i className="ti ti-brand-linkedin text-sm"></i>
                    LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note about growing team */}
        {team.length < 3 && (
          <p className="text-center text-dim text-sm mt-8 italic">
            More team members to be featured soon.
          </p>
        )}
      </div>
    </section>
  );
}