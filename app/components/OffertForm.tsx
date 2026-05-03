'use client';

import { useState } from 'react';

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1.5rem',
};

const inputClass = "w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none cursor-pointer";

const truckTypes = [
  'Betongbil', 'Bodbil', 'Chassi', 'Djurtransport', 'Dragbil', 'Flakbil',
  'Flisbil', 'Kranbil', 'Kranväxlare', 'Lastväxlare/krokbil', 'Liftdumperbil',
  'Skåpbil, kyl/frys/värme', 'Slamsugbil', 'Spannmålsbil', 'Tankbil',
  'Timmerbil', 'Tippbil', 'Växelflak/Containerbil',
];

const truckBrands = [
  'Volvo', 'Scania', 'Mercedes-Benz', 'MAN', 'DAF', 'Iveco', 'Renault', 'Ford', 'Annat',
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => String(currentYear - i));

function SuccessMessage({ onReset, label }: { onReset: () => void; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-title text-dark-blue uppercase">Tack för din förfrågan!</h3>
      <p className="text-gray-500 text-sm">Vi återkommer till dig så snart som möjligt.</p>
      <button
        onClick={onReset}
        className="mt-2 text-sm text-dark-blue underline hover:text-light-blue transition-colors"
      >
        {label}
      </button>
    </div>
  );
}

export default function OffertForm() {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');

  // Sell form
  const [sellData, setSellData] = useState({ name: '', companyName: '', regNumber: '', truckType: '', phone: '', email: '' });
  const [sellSubmitted, setSellSubmitted] = useState(false);
  const [sellError, setSellError] = useState(false);
  const [sellSubmitting, setSellSubmitting] = useState(false);

  // Buy form
  const [buyData, setBuyData] = useState({ name: '', companyName: '', email: '', phone: '', brand: '', truckType: '', year: '' });
  const [buySubmitted, setBuySubmitted] = useState(false);
  const [buyError, setBuyError] = useState(false);
  const [buySubmitting, setBuySubmitting] = useState(false);

  const handleSellSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSellSubmitting(true);
    setSellError(false);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'sell', ...sellData }),
      });
      if (res.ok) {
        setSellSubmitted(true);
        setSellData({ name: '', companyName: '', regNumber: '', truckType: '', phone: '', email: '' });
      } else setSellError(true);
    } catch { setSellError(true); }
    finally { setSellSubmitting(false); }
  };

  const handleBuySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuySubmitting(true);
    setBuyError(false);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'buy', ...buyData }),
      });
      if (res.ok) {
        setBuySubmitted(true);
        setBuyData({ name: '', companyName: '', email: '', phone: '', brand: '', truckType: '', year: '' });
      } else setBuyError(true);
    } catch { setBuyError(true); }
    finally { setBuySubmitting(false); }
  };

  return (
    <section id="offert-form" className="relative -mt-32 px-4 max-w-5xl mx-auto z-20 pb-16">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('sell')}
            className={`text-xl font-semibold pb-3 border-b-2 transition-colors cursor-pointer ${activeTab === 'sell' ? 'text-dark-blue border-dark-blue' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
          >
            Sälj Din Lastbil
          </button>
          <button
            onClick={() => setActiveTab('buy')}
            className={`text-xl font-semibold pb-3 border-b-2 transition-colors cursor-pointer ${activeTab === 'buy' ? 'text-dark-blue border-dark-blue' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
          >
            Köp En Lastbil
          </button>
        </div>

        {/* Sell Tab */}
        {activeTab === 'sell' && (
          sellSubmitted ? (
            <SuccessMessage onReset={() => setSellSubmitted(false)} label="Skicka en ny förfrågan" />
          ) : (
            <form onSubmit={handleSellSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Namn" value={sellData.name} onChange={e => setSellData({ ...sellData, name: e.target.value })} required className={inputClass} />
                <input type="text" name="companyName" placeholder="Företagsnamn" value={sellData.companyName} onChange={e => setSellData({ ...sellData, companyName: e.target.value })} required className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="regNumber" placeholder="Registreringsnummer" value={sellData.regNumber} onChange={e => setSellData({ ...sellData, regNumber: e.target.value })} required className={inputClass} />
                <select name="truckType" value={sellData.truckType} onChange={e => setSellData({ ...sellData, truckType: e.target.value })} required className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle}>
                  <option value="">Typ av lastbil</option>
                  {truckTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" name="phone" placeholder="Telefonnummer" value={sellData.phone} onChange={e => setSellData({ ...sellData, phone: e.target.value })} required className={inputClass} />
                <input type="email" name="email" placeholder="E-post" value={sellData.email} onChange={e => setSellData({ ...sellData, email: e.target.value })} required className={inputClass} />
              </div>
              {sellError && <p className="text-sm text-red-500">Ett fel uppstod. Vänligen försök igen.</p>}
              <button type="submit" disabled={sellSubmitting} className="w-full bg-dark-blue text-white py-4 px-6 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {sellSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
              </button>
            </form>
          )
        )}

        {/* Buy Tab */}
        {activeTab === 'buy' && (
          buySubmitted ? (
            <SuccessMessage onReset={() => setBuySubmitted(false)} label="Skicka en ny förfrågan" />
          ) : (
            <form onSubmit={handleBuySubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Namn" value={buyData.name} onChange={e => setBuyData({ ...buyData, name: e.target.value })} required className={inputClass} />
                <input type="text" placeholder="Företagsnamn" value={buyData.companyName} onChange={e => setBuyData({ ...buyData, companyName: e.target.value })} required className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="E-post" value={buyData.email} onChange={e => setBuyData({ ...buyData, email: e.target.value })} required className={inputClass} />
                <input type="tel" placeholder="Telefonnummer" value={buyData.phone} onChange={e => setBuyData({ ...buyData, phone: e.target.value })} required className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select value={buyData.brand} onChange={e => setBuyData({ ...buyData, brand: e.target.value })} required className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle}>
                  <option value="">Märke på lastbil</option>
                  {truckBrands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <select value={buyData.truckType} onChange={e => setBuyData({ ...buyData, truckType: e.target.value })} required className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle}>
                  <option value="">Typ av lastbil</option>
                  {truckTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <select value={buyData.year} onChange={e => setBuyData({ ...buyData, year: e.target.value })} required className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle}>
                <option value="">Årsmodell</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              {buyError && <p className="text-sm text-red-500">Ett fel uppstod. Vänligen försök igen.</p>}
              <button type="submit" disabled={buySubmitting} className="w-full bg-dark-blue text-white py-4 px-6 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {buySubmitting ? 'Skickar...' : 'Skicka förfrågan'}
              </button>
            </form>
          )
        )}
      </div>
    </section>
  );
}
