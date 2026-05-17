import Modal from '../ui/Modal';

export default function ProductModal({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-3 md:space-y-4">
        {/* Image – smaller on mobile */}
        {product.img && (
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-40 md:h-48 object-cover rounded-xl border border-white/10"
          />
        )}

        {/* Badge + Title */}
        <div>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            {product.badge}
          </span>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1">
            {product.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-muted text-sm md:text-base leading-relaxed">
          {product.desc}
        </p>

        {/* Actions */}
        <div className="flex gap-2 md:gap-3 pt-2">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 bg-teal text-white rounded-lg text-xs md:text-sm font-medium hover:bg-teal/90 transition"
          >
            View full product page <i className="ti ti-external-link"></i>
          </a>
          <button
            onClick={onClose}
            className="px-3 py-2 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-gray-300 hover:bg-white/10 transition"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}