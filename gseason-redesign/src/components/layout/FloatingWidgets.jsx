import { useState } from 'react';
import AIChatbotModal from '../common/AIChatbotModal';

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[60]">
        <button
          onClick={() => setChatOpen(true)}
          className="w-12 h-12 bg-navy-light border border-teal/50 rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-all group relative"
          title="AI Assistant"
        >
          <i className="ti ti-message-chatbot text-teal-light text-xl"></i>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-navy-dark border border-white/10 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            AI Assistant
          </span>
        </button>

        {/* WhatsApp unchanged */}
        <a
          href="https://wa.me/27726390021"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all group relative"
          title="WhatsApp"
        >
          <i className="ti ti-brand-whatsapp text-white text-2xl"></i>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-navy-dark border border-white/10 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            WhatsApp Us
          </span>
        </a>
      </div>

      <AIChatbotModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}