export default function ProductCard({ product, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(product)}
      className="block w-full h-full text-left bg-navy-light border border-white/[0.07] rounded-14 overflow-hidden transition-all hover:border-teal/40 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-teal"
    >
      {/* Fixed aspect ratio container – all images become the same size */}
      <div className="aspect-video overflow-hidden relative bg-[#0a1525]">
        {product.img ? (
          <img
            src={product.img}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <i className={`ti ${product.icon} text-6xl text-teal-light/15`}></i>
          </div>
        )}
        <span className="absolute top-2.5 left-2.5 bg-navy/85 text-teal-light text-[10px] px-2 py-0.5 rounded font-medium border border-teal-light/20 uppercase tracking-wide">
          {product.badge}
        </span>
      </div>

      <div className="p-5 flex flex-col">
        <h3 className="font-display text-base md:text-lg font-semibold text-white mb-2">
          {product.title}
        </h3>
        <p className="text-sm md:text-base text-muted leading-relaxed flex-1">
          {product.desc}
        </p>
        <span className="inline-flex items-center gap-1 mt-4 text-teal-light text-sm font-medium group-hover:gap-2 transition-all">
          View details <i className="ti ti-arrow-right"></i>
        </span>
      </div>
    </button>
  );
}