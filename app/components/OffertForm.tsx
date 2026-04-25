'use client';

import { useState } from 'react';

export default function OffertForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    regNumber: '',
    truckType: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Tack för din förfrågan! Vi återkommer snart.');
        setFormData({
          name: '',
          companyName: '',
          regNumber: '',
          truckType: '',
          phone: '',
          email: '',
        });
      } else {
        alert('Ett fel uppstod. Vänligen försök igen.');
        console.error('Error:', data);
      }
    } catch (error) {
      alert('Ett fel uppstod. Vänligen försök igen.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="offert-form" className="relative -mt-32 px-4 max-w-5xl mx-auto z-20 pb-16">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          <button className="text-xl font-semibold text-dark-blue pb-3 border-b-2 border-dark-blue">
            Sälj Din Lastbil
          </button>
          {/* <button className="text-xl text-gray-400 pb-3">
            Hitta Din Nästa Lastbil
          </button> */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Name, Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Namn"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Företagsnamn"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />
          </div>

          {/* Row 2: Reg Number, Truck Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="regNumber"
              placeholder="Registreringsnummer"
              value={formData.regNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />

            <select
              name="truckType"
              value={formData.truckType}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 focus:ring-2 focus:ring-light-blue focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="">Typ av lastbil</option>
              <option value="Betongbil">Betongbil</option>
              <option value="BodBil">Bodbil</option>
              <option value="Chassi">Chassi</option>
              <option value="Djurtransport">Djurtransport</option>
              <option value="Dragbil">Dragbil</option>
              <option value="Flakbil">Flakbil</option>
              <option value="Flisbil">Flisbil</option>
              <option value="Kranbil">Kranbil</option>
              <option value="Kranväxlare">Kranväxlare</option>
              <option value="Lastväxlare">Lastväxlare/krokbil</option>
              <option value="Liftdumperil">Liftdumperbil</option>
              <option value="Skåpbil">Skåpbil, kyl/frys/värme</option>
              <option value="Slamsugbil">Slamsugbil</option>
              <option value="Spannmålsbild">Spannmålsbild</option>
              <option value="Tankbil">Tankbil</option>
              <option value="Timmerbil">Timmerbil</option>
              <option value="Tippbil">Tippbil</option>
              <option value="Växelflak">Växelflak/Containerbil</option>
            </select>
          </div>

          {/* Row 3: Phone, Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="E-post"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-dark-blue text-white py-4 px-6 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
          </button>
        </form>
      </div>
    </section>
  );
}
