import { useState, useEffect, useRef } from 'react';
import { searchIndex } from '../../data/searchIndex';

export default function SearchModal({ isOpen, onClose, onAction }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults(searchIndex);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const filtered = searchIndex.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item) => {
    if (item.href) {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        el.classList.add('ring-2', 'ring-teal', 'ring-offset-2', 'ring-offset-navy');
        setTimeout(() => el.classList.remove('ring-2', 'ring-teal', 'ring-offset-2', 'ring-offset-navy'), 2000);
      }
    }
    if (item.action) {
      onAction?.(item.action);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-navy-light border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-white/10 px-5">
          <i className="ti ti-search text-dim text-xl mr-3"></i>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, sections, or actions..."
            className="w-full bg-transparent py-5 text-white placeholder-gray-500 focus:outline-none text-base"
          />
          <kbd className="hidden sm:inline-block bg-white/5 border border-white/10 rounded px-2 py-0.5 text-sm text-dim ml-2">
            ESC
          </kbd>
        </div>
        <ul
          ref={listRef}
          className="max-h-72 overflow-y-auto py-2"
        >
          {results.length === 0 && (
            <li className="px-5 py-8 text-center text-dim text-base">
              No results found
            </li>
          )}
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item)}
              className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors ${
                idx === selectedIndex
                  ? 'bg-teal/10 border-l-2 border-teal'
                  : 'border-l-2 border-transparent hover:bg-white/5'
              }`}
            >
              <i className={`ti ${item.icon} text-dim text-xl`}></i>
              <div>
                <span className="text-white text-base font-medium block">{item.label}</span>
                <span className="text-dim text-sm">{item.type}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-white/10 px-5 py-3 flex justify-between text-dim text-sm">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
}