import { useState } from 'react';
import Modal from '../ui/Modal';

export default function QuoteRequestModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you’d POST to your API or CRM
    console.log('Quote request:', form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', phone: '', product: '', message: '' });
    }, 3000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ti ti-check text-teal text-3xl"></i>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">Thank you!</h3>
          <p className="text-muted">Your request has been received. Our team will get back to you within 24 hours.</p>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl font-bold text-white mb-1">Request a Quote</h2>
          <p className="text-muted text-sm mb-6">Tell us what you need and we'll prepare a tailored proposal.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-dim mb-1">Full name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition"
                placeholder="Your name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs text-dim mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-dim mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition"
                  placeholder="+65 ..."
                />
              </div>
            </div>
            <div>
              <label htmlFor="product" className="block text-xs text-dim mb-1">Product interest</label>
              <select
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition"
              >
                <option value="" className="bg-navy-light">Select a category</option>
                <option value="Medical & Rescue" className="bg-navy-light">Medical & Rescue</option>
                <option value="Ammunition Containers" className="bg-navy-light">Ammunition Containers</option>
                <option value="Mobile Shelter Systems" className="bg-navy-light">Mobile Shelter Systems</option>
                <option value="Batteries & Chargers" className="bg-navy-light">Batteries & Chargers</option>
                <option value="Water Filtration" className="bg-navy-light">Water Filtration</option>
                <option value="Other" className="bg-navy-light">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-dim mb-1">Additional details</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition resize-none"
                placeholder="Any specific requirements, quantities, timelines..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal text-white py-3 rounded-lg font-medium hover:bg-teal/90 transition"
            >
              Submit Request
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}