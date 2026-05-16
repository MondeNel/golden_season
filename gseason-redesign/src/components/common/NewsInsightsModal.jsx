import { newsArticles } from '../../data/newsInsights';

export default function NewsInsightsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-6xl bg-navy-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <span className="text-teal text-xs uppercase tracking-widest font-semibold">News & Insights</span>
            <h2 className="font-display text-2xl font-bold text-white mt-1">Latest from Golden Season</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <i className="ti ti-x text-white text-xl"></i>
          </button>
        </div>

        {/* Grid of articles – now non‑interactive */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsArticles.map((article, idx) => (
              <div
                key={idx}
                className="group block bg-navy border border-white/10 rounded-xl overflow-hidden transition-all hover:border-teal/40 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://gseason.com/wp-content/uploads/2025/09/Military-Deployments.webp';
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-teal-light text-[10px] uppercase tracking-widest font-medium mb-1">
                    {article.date}
                  </p>
                  <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-teal-light transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-teal-light text-xs font-medium opacity-50">
                    Read more <i className="ti ti-arrow-right"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}