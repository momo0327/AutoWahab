export default function EasySteps() {
  return (
    <section className="py-24 md:py-32 px-4 bg-bg-color">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-blue mb-12 text-left md:text-center ">
          Så här enkelt är det 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-left md:text-center">
            <svg
              className="w-16 h-16 text-light-blue mb-4 md:mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Fyll i Formuläret</h3>
            <p className="text-gray-600">
              Berätta om din lastbil och vad du vill sälja den för
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-left md:text-center">
            <svg
              className="w-16 h-16 text-light-blue mb-4 md:mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
            </svg>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Få En Offert</h3>
            <p className="text-gray-600">
              Vi kontaktar dig inom 24 timmar med ett konkurrenskraftigt erbjudande
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-left md:text-center">
            <svg
              className="w-16 h-16 text-light-blue mb-4 md:mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Få Betalt</h3>
            <p className="text-gray-600">
              Vi hämtar lastbilen och du får betalt direkt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
