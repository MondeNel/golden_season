import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="relative bg-navy-light border border-white/10 rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dim hover:text-white transition"
          aria-label="Close"
        >
          <i className="ti ti-x text-xl"></i>
        </button>
        {children}
      </div>
    </div>
  );
}