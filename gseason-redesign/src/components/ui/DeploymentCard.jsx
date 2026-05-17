export default function DeploymentCard({ deployment }) {
  return (
    <div className="block h-full min-h-[180px] md:min-h-[280px] rounded-14 overflow-hidden relative group cursor-pointer">
      <img
        src={deployment.img}
        alt={deployment.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
        <span className="inline-block bg-teal/20 text-teal-light text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded font-medium border border-teal/30 uppercase tracking-wide mb-1.5">
          {deployment.tag}
        </span>
        <h3 className="font-display text-xs md:text-base font-semibold text-white mb-0.5">
          {deployment.title}
        </h3>
        <p className="text-[10px] md:text-xs text-muted leading-relaxed">{deployment.desc}</p>
        <span className="inline-flex items-center gap-1 mt-1.5 md:mt-2 text-teal-light text-[10px] md:text-xs font-medium opacity-50">
          More info <i className="ti ti-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}