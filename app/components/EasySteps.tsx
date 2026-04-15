export default function EasySteps() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-light-blue px-6 py-2 rounded-full text-xl font-medium mb-6 font-title">
            LÄTT SOM EN PLÄTT
          </span>
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-blue">
            Tre enkla steg till att sälja din lastbil
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 - Contact Us */}
          <div className="bg-bg-color rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-title font-bold text-dark-blue mb-4">Kontakta Oss</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Fyll i formuläret eller ring oss direkt. Berätta om din lastbil och vi hjälper dig vidare
            </p>
          </div>

          {/* Step 2 - Receive Offer (Highlighted) */}
          <div className="bg-dark-blue rounded-2xl p-10 flex flex-col items-center text-center text-white hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-title font-bold mb-4">Ta Emot Offert</h3>
            <p className="text-white/90 text-base leading-relaxed">
              Vi återkommer snabbt med ett rättvist och konkurrenskraftigt erbjudande på din lastbil
            </p>
          </div>

          {/* Step 3 - Get Paid */}
          <div className="bg-bg-color rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-title font-bold text-dark-blue mb-4">Få Betalt</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Vi hämtar lastbilen och du får betalt direkt. Snabbt, enkelt och tryggt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
