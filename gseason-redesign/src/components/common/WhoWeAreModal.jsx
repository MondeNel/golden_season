import { useState } from 'react';
import { whoWeAre } from '../../data/whoWeAre';

export default function WhoWeAreModal({ isOpen, onClose }) {
  const [imgError, setImgError] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-5xl bg-navy-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-up flex flex-col md:flex-row max-h-[85vh]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <i className="ti ti-x text-white text-xl"></i>
        </button>

        {/* Left panel – image (conditionally shown) */}
        {!imgError && (
          <div className="md:w-2/5 h-64 md:h-auto flex-shrink-0 relative overflow-hidden">
            <img
              src={whoWeAre.image}
              alt={whoWeAre.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent md:bg-gradient-to-r" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
              <p className="text-teal-light text-xs uppercase tracking-widest font-semibold">{whoWeAre.title}</p>
              <h2 className="font-display text-2xl font-bold text-white mt-1">{whoWeAre.subtitle}</h2>
            </div>
          </div>
        )}

        {/* Right panel – content (full width if image hidden) */}
        <div className={`flex-1 overflow-y-auto p-6 md:p-8 space-y-6 ${imgError ? 'md:max-w-full' : ''}`}>
          <div className={imgError ? 'block' : 'hidden md:block'}>
            <span className="text-teal text-xs uppercase tracking-widest font-semibold">{whoWeAre.title}</span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">{whoWeAre.subtitle}</h2>
          </div>

          {whoWeAre.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-display text-lg font-semibold text-teal-light mb-2">
                {section.heading}
              </h3>
              <div className="space-y-2">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}