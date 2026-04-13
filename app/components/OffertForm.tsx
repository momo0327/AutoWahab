'use client';

import { useState } from 'react';

export default function OffertForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    year: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Tack för din förfrågan! Vi återkommer snart.');
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
          <button className="text-xl text-gray-400 pb-3">
            Hitta Din Nästa Lastbil
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Year, Make, Model */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 focus:ring-2 focus:ring-light-blue focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="">Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>

            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 focus:ring-2 focus:ring-light-blue focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="">Make</option>
              <option value="Volvo">Volvo</option>
              <option value="Scania">Scania</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="MAN">MAN</option>
              <option value="DAF">DAF</option>
              <option value="Iveco">Iveco</option>
            </select>

            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 focus:ring-2 focus:ring-light-blue focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="">Model</option>
              <option value="FH16">FH16</option>
              <option value="R450">R450</option>
              <option value="Actros">Actros</option>
            </select>
          </div>

          {/* Row 2: Mileage, VIN, Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Mileage"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="VIN"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-gray-100 border-none rounded-lg text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-light-blue focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-dark-blue text-white py-4 px-6 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300"
            >
              Continue to step 2
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
