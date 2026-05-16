export default function DeploymentCard({ deployment }) {
  return (
    <a
      href={deployment.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full min-h-[280px] rounded-14 overflow-hidden relative group cursor-pointer"
    >
      {/* Image – absolute to fill card */}
      <img
        src={deployment.img}
        alt={deployment.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block bg-teal/20 text-teal-light text-[10px] px-2.5 py-0.5 rounded font-medium border border-teal/30 uppercase tracking-wide mb-2">
          {deployment.tag}
        </span>
        <h3 className="font-display text-base font-semibold text-white mb-1">
          {deployment.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed">{deployment.desc}</p>
        <span className="inline-flex items-center gap-1 mt-2 text-teal-light text-xs font-medium group-hover:gap-2 transition-all">
          More info <i className="ti ti-arrow-right"></i>
        </span>
      </div>
    </a>
  );
}