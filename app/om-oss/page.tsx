import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OmOss() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-light-blue to-bg-color">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-title text-dark-blue mb-6">OM OSS</h1>
          <p className="text-xl text-dark-blue">
            Din pålitliga partner för lastbilsköp i Sverige
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-title text-dark-blue mb-6">Vår Historia</h2>
          <p className="text-lg text-gray-700 mb-4">
            AutoWahab grundades med en enkel vision: att göra det enkelt och tryggt för företag
            och privatpersoner att sälja sina lastbilar. Med över 15 års erfarenhet inom
            lastbilsbranschen har vi byggt upp ett starkt nätverk och en gedigen kunskap om
            marknaden.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Vi är stolta över att erbjuda snabba och rättvisa värderingar, samt en smidig process
            från första kontakt till slutlig affär. Vårt mål är att du som kund ska känna dig
            trygg och nöjd genom hela processen.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title text-dark-blue mb-12 text-center">
            VÅRA VÄRDERINGAR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Pålitlighet</h3>
              <p className="text-gray-600">
                Vi håller alltid våra löften och ser till att varje transaktion går smidigt
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Rättvisa Priser</h3>
              <p className="text-gray-600">
                Vi erbjuder konkurrenskraftiga priser baserade på marknadsvärde
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Snabb Process</h3>
              <p className="text-gray-600">
                Från offert till betalning på rekordtid
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-title text-dark-blue mb-8 text-center">
            VARFÖR VÄLJA OSS?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-dark-blue mb-1">
                  Över 15 års erfarenhet
                </h3>
                <p className="text-gray-600">
                  Vi har gedigen kunskap om lastbilsmarknaden och vet vad som är ett rättvist pris
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-dark-blue mb-1">
                  Snabb betalning
                </h3>
                <p className="text-gray-600">
                  Du får betalt direkt när vi hämtar lastbilen
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-dark-blue mb-1">
                  Vi hanterar all administration
                </h3>
                <p className="text-gray-600">
                  Du behöver inte oroa dig för pappersarbete eller omregistrering
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-dark-blue mb-1">
                  Rikstäckande service
                </h3>
                <p className="text-gray-600">
                  Vi köper lastbilar i hela Sverige och kan hämta var du än befinner dig
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
