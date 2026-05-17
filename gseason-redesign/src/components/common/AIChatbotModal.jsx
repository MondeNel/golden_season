import { useState, useRef, useEffect, useCallback } from 'react';

// ─── Knowledge base (keyword → response) ──────────────────────────────────────
const KNOWLEDGE = [
  {
    keywords: ['product', 'offer', 'range', 'catalogue', 'list'],
    response: `Golden Season offers five main product ranges:
• Medical & Rescue – MedEvac stretchers, BurnTec kits, haemorrhage control
• Ammunition Containers – PA108 STANAG‑certified airtight containers
• Mobile Shelter Systems – rapid‑deploy field hospitals & FOB shelters
• Batteries & Chargers – BB2590/U packs & smart chargers
• Water Filtration – AutoPure™, StepPure™, PedalPure™

Visit https://gseason.com/medical-rescue/ to start.`,
  },
  {
    keywords: ['medevac', 'stretcher', 'burn', 'rescue', 'medical', 'trauma', 'casualt'],
    response: `Our Medical & Rescue range includes MedEvac stretchers, BurnTec burn kits, and casualty response kits (25/50/100+ casualties). Designed for extreme field conditions. Learn more at https://gseason.com/medical-rescue/`,
  },
  {
    keywords: ['ammunition', 'ammo', 'container', 'pa108', 'stanag'],
    response: `The PA108 ammunition containers are airtight, ruggedised, and STANAG‑certified for small, medium & large‑calibre munitions. Humidity and heat resistant. https://gseason.com/ammunition-containers/`,
  },
  {
    keywords: ['shelter', 'field hospital', 'command post', 'fob', 'mobile shelter'],
    response: `Mobile Shelter Systems include rapid‑deploy field hospitals, command posts, and FOB shelters. All‑weather, deployable in under 30 minutes. https://gseason.com/mobile-shelter-systems/`,
  },
  {
    keywords: ['battery', 'charger', 'bb2590', 'power'],
    response: `BB2590/U compatible battery packs and smart field chargers for mission‑critical power. https://gseason.com/batteries-chargers/`,
  },
  {
    keywords: ['water', 'filtration', 'purif', 'autopure', 'steppure', 'pedalpure'],
    response: `Water Filtration systems: AutoPure™ (1 000 L/hr, 15 min deploy), StepPure™ (gravity‑fed), PedalPure™ (human‑powered, no electricity). https://gseason.com/water-filtration-systems/`,
  },
  {
    keywords: ['quote', 'price', 'cost', 'buy', 'order', 'rfq'],
    response: `You can request a quote directly on our website: https://gseason.com/request-quote/
Or contact us via WhatsApp (+27726390021) or email (info@goldenseason.com.sg).`,
  },
  {
    keywords: ['contact', 'phone', 'email', 'whatsapp', 'support', 'help'],
    response: `Contact Golden Season:
• Phone: +65 6863 2228
• Email: info@goldenseason.com.sg
• WhatsApp: +27726390021
• Support: https://gseason.com/global-support/`,
  },
  {
    keywords: ['who', 'about', 'company', 'history', 'founded'],
    response: `Golden Season Pte Ltd is a Singapore‑based company founded in 1982. We supply mission‑ready equipment for defence, medical, and humanitarian operations in 50+ countries.`,
  },
  {
    keywords: ['client', 'customer', 'who use', 'deployment'],
    response: `Our equipment is used by Singapore Civil Defence, Red Cross, UN OCHA, RSAF, NATO Allied Forces, MSF, German Bundeswehr, WFP, ICRC, and many more.`,
  },
];

const FALLBACK_RESPONSE = `I don't have specific information on that. For detailed questions, please reach out directly:
• WhatsApp: +27726390021
• Email: info@goldenseason.com.sg
• Support: https://gseason.com/global-support/`;

const SUGGESTIONS = [
  'What products do you offer?',
  'MedEvac stretcher specs',
  'Request a quote',
  'Water filtration options',
  'WhatsApp contact',
];

function findResponse(text) {
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    const score = entry.keywords.reduce((acc, kw) => acc + (lower.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry.response;
    }
  }
  return bestScore > 0 ? best : FALLBACK_RESPONSE;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AIChatbotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Golden Season assistant.\n\nI can help with product info, specs, quotes, and contact details. Just ask!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  // Show suggestions at start and after each assistant reply
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const sendMessage = useCallback(async (overrideText) => {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;

    setSuggestionsVisible(false);
    setInput('');

    const newUserMsg = { role: 'user', content: text };
    setMessages((prev) => [...prev, newUserMsg]);
    setLoading(true);

    setTimeout(() => {
      const reply = findResponse(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setLoading(false);
      // Show suggestions again after bot reply
      setSuggestionsVisible(true);
    }, 600);
  }, [input, loading]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const useSuggestion = (text) => sendMessage(text);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="GS Assistant"
    >
      <div className="w-full sm:max-w-md bg-[#0b1a30] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-slide-up">

        {/* Header */}
        <div className="flex items-center gap-3 bg-[#040c18] px-4 py-3 border-b border-white/10 flex-shrink-0">
          <div className="w-9 h-9 bg-[#1d9e75] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1d9e75]/20">
            <i className="ti ti-robot text-white text-base" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white font-[Syne,sans-serif] truncate">GS Assistant</div>
            <div className="text-xs text-[#7dd3b8] flex items-center gap-1.5">
              {loading ? (
                <>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  <span>Thinking…</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-[#1d9e75] rounded-full animate-[pulse_2s_infinite]" />
                  <span>Online — instant replies</span>
                </>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              setMessages([{ role: 'assistant', content: "Chat cleared! How can I help you?" }]);
              setSuggestionsVisible(true);
            }}
            className="text-[#4a6a84] hover:text-[#7dd3b8] transition-colors p-1 rounded"
            title="Clear chat"
          >
            <i className="ti ti-eraser text-base" />
          </button>
          <button
            onClick={onClose}
            className="text-[#4a6a84] hover:text-white transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <i className="ti ti-x text-lg" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#060f1e] scroll-smooth overscroll-contain">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} message={msg} />
          ))}
          {loading && (
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 bg-[#1d9e75] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ti ti-robot text-white text-xs" />
              </div>
              <div className="bg-[#0d1f3c] border border-white/6 rounded-2xl rounded-bl-sm px-4 py-3">
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggestions */}
        {suggestionsVisible && !loading && (
          <div className="flex gap-2 flex-wrap px-4 py-2 bg-[#060f1e] border-t border-white/5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => useSuggestion(s)}
                className="text-[11px] text-[#7dd3b8] px-3 py-1.5 bg-white/4 hover:bg-[#1d9e75]/15 border border-white/8 hover:border-[#1d9e75]/40 rounded-full transition-all whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-end gap-2 p-3 bg-[#040c18] border-t border-white/10 flex-shrink-0">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask about products, specs, or anything…"
            rows={1}
            disabled={loading}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-2.5 px-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#1d9e75]/50 resize-none overflow-hidden leading-relaxed disabled:opacity-50 transition-colors"
            style={{ minHeight: '40px', maxHeight: '120px' }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="w-10 h-10 bg-[#1d9e75] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#158661] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#1d9e75]/20"
          >
            {loading ? <i className="ti ti-loader-2 text-white text-sm animate-spin" /> : <i className="ti ti-send text-white text-sm" />}
          </button>
        </div>

        <div className="text-center text-[10px] text-[#2a4a64] py-2 bg-[#040c18] border-t border-white/5">
          GS Assistant can make mistakes. For urgent matters contact{' '}
          <a href="https://wa.me/27726390021" target="_blank" rel="noreferrer" className="text-[#1d9e75] hover:underline">WhatsApp</a>.
        </div>
      </div>
    </div>
  );
}

// ─── Message bubble ────────────────────────────────────────────────────────────
function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  const formatContent = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) =>
      urlRegex.test(part) ? (
        <a key={i} href={part} target="_blank" rel="noreferrer" className="text-[#7dd3b8] underline underline-offset-2 hover:text-white transition-colors">{part}</a>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] text-sm py-2.5 px-4 bg-[#1d9e75] text-white rounded-2xl rounded-br-sm leading-relaxed whitespace-pre-wrap break-words shadow-md shadow-[#1d9e75]/20">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2">
      <div className="w-6 h-6 bg-[#1d9e75]/20 border border-[#1d9e75]/30 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5">
        <i className="ti ti-robot text-[#7dd3b8] text-xs" />
      </div>
      <div className="max-w-[85%] text-sm py-2.5 px-4 bg-[#0d1f3c] text-gray-300 border border-white/6 rounded-2xl rounded-bl-sm leading-relaxed whitespace-pre-wrap break-words">
        {formatContent(message.content)}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center h-4">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#4a6a84]"
          style={{ animation: 'typingBounce 0.9s infinite', animationDelay: `${i * 0.2}s` }}
        />
      ))}
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.25s ease both; }
      `}</style>
    </div>
  );
}