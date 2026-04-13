export default function BilarILager() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-title text-dark-blue mb-12 text-center">
          BILAR I LAGER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Truck Card 1 */}
          <div className="bg-bg-color rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1566023888759-6b7df0d30a72?q=80&w=400"
                alt="Lastbil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Volvo FH16</h3>
              <p className="text-light-blue mb-2">2018</p>
              <p className="text-sm text-gray-600 mb-4">500 000 km</p>
              <p className="text-lg font-semibold text-dark-blue">895 000 kr</p>
            </div>
          </div>

          {/* Truck Card 2 */}
          <div className="bg-bg-color rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=400"
                alt="Lastbil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Scania R450</h3>
              <p className="text-light-blue mb-2">2019</p>
              <p className="text-sm text-gray-600 mb-4">420 000 km</p>
              <p className="text-lg font-semibold text-dark-blue">750 000 kr</p>
            </div>
          </div>

          {/* Truck Card 3 */}
          <div className="bg-bg-color rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400"
                alt="Lastbil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Mercedes-Benz Actros</h3>
              <p className="text-light-blue mb-2">2020</p>
              <p className="text-sm text-gray-600 mb-4">350 000 km</p>
              <p className="text-lg font-semibold text-dark-blue">950 000 kr</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.blocket.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-blue text-white py-3 px-8 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300"
          >
            Visa Mer
          </a>
        </div>
      </div>
    </section>
  );
}
