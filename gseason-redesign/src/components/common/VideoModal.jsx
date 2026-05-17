import { useEffect, useRef, useState } from 'react';

export default function VideoModal({ isOpen, onClose, youtubeId }) {
  const overlayRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setError(false);
  }, [youtubeId, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close video"
        >
          <i className="ti ti-x text-white text-xl"></i>
        </button>

        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
            <i className="ti ti-alert-circle text-5xl mb-4 text-teal-light"></i>
            <p className="text-lg font-semibold mb-2">Video unavailable</p>
            <p className="text-sm text-muted mb-4">
              This video may be private or restricted. You can still watch it on YouTube.
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-teal text-white rounded-lg text-sm font-medium hover:bg-teal/90 transition"
            >
              Watch on YouTube
            </a>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title="Golden Season video"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onError={() => setError(true)}
          />
        )}
      </div>
    </div>
  );
}