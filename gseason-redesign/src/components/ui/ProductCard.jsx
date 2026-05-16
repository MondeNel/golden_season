export default function ProductCard({ product, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(product)}
      className="group relative block w-full h-full text-left focus:outline-none"
    >
      {/* Image container – clean, rounded, no border */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#0a1525]">
        {product.img ? (
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <i className={`ti ${product.icon} text-6xl text-teal-light/15`}></i>
          </div>
        )}
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content below image */}
      <div className="pt-4 pb-2">
        {/* Category badge */}
        <span className="inline-block text-teal text-[11px] uppercase tracking-[1.5px] font-semibold mb-2">
          {product.badge}
        </span>
        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-teal-light transition-colors">
          {product.title}
        </h3>
        {/* Description */}
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {product.desc}
        </p>
        {/* Learn more link */}
        <span className="inline-flex items-center gap-1.5 mt-3 text-teal-light text-sm font-medium group-hover:gap-2.5 transition-all">
          Learn more <i className="ti ti-arrow-right text-xs"></i>
        </span>
      </div>
    </button>
  );
}