export default function ProductCard({ product, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(product)}
      className="group relative block w-full h-full text-left focus:outline-none"
    >
      {/* Smaller image container on mobile */}
      <div className="aspect-[3/2] md:aspect-[4/3] overflow-hidden rounded-xl bg-[#0a1525]">
        {product.img ? (
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <i className={`ti ${product.icon} text-4xl md:text-6xl text-teal-light/15`}></i>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="pt-2 md:pt-4 pb-1">
        <span className="inline-block text-teal text-[9px] md:text-[11px] uppercase tracking-[1.5px] font-semibold mb-1">
          {product.badge}
        </span>
        <h3 className="font-display text-xs md:text-lg font-semibold text-white mb-0.5 group-hover:text-teal-light transition-colors">
          {product.title}
        </h3>
        <p className="text-[10px] md:text-sm text-muted leading-relaxed line-clamp-2">
          {product.desc}
        </p>
        <span className="inline-flex items-center gap-1 mt-1.5 md:mt-3 text-teal-light text-[10px] md:text-xs font-medium group-hover:gap-2 transition-all">
          Learn more <i className="ti ti-arrow-right text-[8px] md:text-xs"></i>
        </span>
      </div>
    </button>
  );
}