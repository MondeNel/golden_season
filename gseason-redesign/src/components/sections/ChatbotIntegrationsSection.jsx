import { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';

const initialMessages = [
  { type: 'bot', text: "Hi! I'm the Golden Season assistant. How can I help you today?" },
  { type: 'user', text: 'Do you have trauma kits for mass casualty events?' },
  { type: 'bot', text: 'Yes — our Large Scale Casualty Response kits are designed for exactly that. Pre-configured for 25, 50, or 100+ casualties and deployable in minutes. Want a quote or a spec sheet?' },
  { type: 'user', text: 'A spec sheet please' },
  { type: 'bot', text: "I'll connect you with our team now — can I take your email or would you prefer WhatsApp?" },
];

export default function ChatbotIntegrationsSection() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const getReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('quote') || lower.includes('price')) return "Certainly! What product and quantity are you looking for?";
    if (lower.includes('spec') || lower.includes('datasheet')) return "I'll send the spec sheet right away. Can I have your email?";
    return "Thank you! Our team will get back to you shortly. In the meantime, feel free to browse our products.";
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { type: 'user', text: trimmed }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: getReply(trimmed) }]);
    }, 800);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section id="contact" className="py-24 px-6 bg-navy-mid">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <span className="text-teal text-xs uppercase tracking-widest font-semibold">Smart Integrations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">Always-On Engagement Tools</h2>
            <p className="text-muted mt-4 max-w-md font-light">An AI assistant that knows your catalogue, a WhatsApp button for instant contact, and CRM lead capture.</p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {[
              { icon: 'ti-brand-whatsapp', bg: '#25D366', title: 'WhatsApp Business', desc: 'Direct line to sales', badge: 'Live', badgeClass: 'bg-teal/20 text-teal-light' },
              { icon: 'ti-robot', bg: '#0d1f3c', title: 'AI Product Assistant', desc: 'Answers specs 24/7', badge: 'Planned', badgeClass: 'bg-blue-500/10 text-blue-400' },
              { icon: 'ti-brand-facebook', bg: '#1877F2', title: 'Facebook Messenger', desc: 'Synced chat', badge: 'Planned', badgeClass: 'bg-blue-500/10 text-blue-400' },
              { icon: 'ti-chart-bar', bg: '#4285F4', title: 'GA4 + CRM Lead Capture', desc: 'Every chat logged', badge: 'Planned', badgeClass: 'bg-blue-500/10 text-blue-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-navy-light border border-white/10 rounded-xl hover:border-teal/40 transition">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white" style={{ background: item.bg }}>
                  <i className={`ti ${item.icon} text-lg`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${item.badgeClass}`}>{item.badge}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="bg-navy border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 bg-navy-dark px-4 py-3 border-b border-white/10">
              <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                <i className="ti ti-robot text-white text-sm"></i>
              </div>
              <div>
                <div className="text-sm font-medium text-white">GS Assistant</div>
                <div className="text-xs text-teal-light flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse-dot"></span>
                  Online — replies instantly
                </div>
              </div>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-navy">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[85%] text-sm py-2 px-3.5 rounded-2xl leading-relaxed ${
                  msg.type === 'bot' ? 'bg-navy-light text-gray-300 rounded-bl-md' : 'bg-teal text-white ml-auto rounded-br-md'
                }`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-navy-dark border-t border-white/10">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal/50"
              />
              <button onClick={sendMessage} className="w-9 h-9 bg-teal rounded-full flex items-center justify-center hover:bg-teal/90 transition">
                <i className="ti ti-send text-white text-sm"></i>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}