'use client';

import { useState } from 'react';

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', companyName: '', email: '', phone: '', message: '' });
        setAgreed(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-title text-dark-blue uppercase">Tack för ditt meddelande!</h3>
        <p className="text-gray-500 text-sm">Vi återkommer till dig så snart som möjligt.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-dark-blue underline hover:text-light-blue transition-colors"
        >
          Skicka ett nytt meddelande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Namn"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-light-blue focus:outline-none text-sm"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Företagsnamn"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-light-blue focus:outline-none text-sm"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="E-post"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-light-blue focus:outline-none text-sm"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefonnummer"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-light-blue focus:outline-none text-sm"
      />
      <textarea
        name="message"
        placeholder="Meddelande"
        value={formData.message}
        onChange={handleChange}
        required
        rows={8}
        className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-light-blue focus:outline-none text-sm resize-none"
      />

      {error && (
        <p className="text-sm text-red-500">Ett fel uppstod. Vänligen försök igen.</p>
      )}

      <label className="flex items-start gap-3 cursor-pointer select-none">
        <div className="relative shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-5 h-5 rounded border-2 border-gray-300 bg-white peer-checked:bg-dark-blue peer-checked:border-dark-blue transition-colors flex items-center justify-center">
            {agreed && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm text-gray-500 leading-snug">
          Jag godkänner att AutoWahab behandlar mina personuppgifter för att hantera min förfrågan.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting || !agreed}
        className="w-full bg-dark-blue text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-light-blue transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
      </button>
    </form>
  );
}
