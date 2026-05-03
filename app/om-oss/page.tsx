import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Badge from '../components/Badge';
import CTAButton from '../components/CTAButton';
import OurLager from '../components/OurLager';

export default function OmOss() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={false} />

      {/* Hero Section - Title Left, Image Right */}
      <section className="pt-48 pb-16 px-4 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Title */}
            <div>
              <div className='py-4'>
              <Badge content="Om oss" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-title text-dark-blue leading-none mb-6 uppercase">
                Din pålitliga lastbilshandlare
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Med över 20 års erfarenhet hjälper vi företag och privatpersoner att köpa och sälja lastbilar i Sverige och internationellt
              </p>

              {/* CTA Button
              <a
                href="tel:0723364384"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-title text-sm font-bold transition-all duration-300 bg-dark-blue text-white border border-dark-blue hover:bg-light-blue hover:border-light-blue"
              >
                <span className="font-bold">Ring oss idag</span>
                <div className="rounded-full p-1.5 bg-white">
                  <svg
                    className="w-4 h-4 text-dark-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a> */}
              <CTAButton text="Kontakta oss" href="/kontakt" bgColor="dark-blue" />
            </div>

            {/* Right - Hero Image */}
            <div className="relative w-full h-[300px] lg:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/test7.jpg"
                alt="AutoWahab lastbilar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story with Images */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-title text-dark-blue mb-16 text-center uppercase">Vår Historia</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                AutoWahab grundades med en enkel vision: att göra det enkelt och tryggt för företag
                och privatpersoner att köpa och sälja lastbilar. Med över 20 års erfarenhet inom
                lastbilsbranschen har vi byggt upp ett starkt nätverk och en gedigen kunskap om
                marknaden.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Vi är verksamma både på den svenska marknaden och internationellt genom export.
                Oavsett om du är en svensk kund som letar efter rätt lastbil eller ett utländskt
                företag som vill köpa från Sverige, vi har erfarenheten och kontaktnätet för att
                hitta den bästa lösningen.
              </p>
            </div>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/3.jpg"
                alt="AutoWahab verksamhet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/2.jpg"
                alt="Lastbilar hos AutoWahab"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Vi är stolta över att erbjuda snabba och rättvisa värderingar samt en smidig process
                från första kontakt till slutlig affär. Vårt mål är att du som kund ska känna dig
                trygg och nöjd genom hela processen.
              </p>
            </div>
          </div>

   
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-bg-color">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-title text-dark-blue mb-16 text-center uppercase">
            Varför Välja Oss
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl">
              <div className="shrink-0">
                <svg className="w-12 h-12 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-title text-dark-blue mb-3">
                  Över 20 års erfarenhet
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Vi har gedigen kunskap om lastbilsmarknaden och vet vad som är ett rättvist pris
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl">
              <div className="shrink-0">
                <svg className="w-12 h-12 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-title text-dark-blue mb-3">
                  Snabb betalning
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Du får betalt direkt när vi har fått fakturan
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl">
              <div className="shrink-0">
                <svg className="w-12 h-12 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-title text-dark-blue mb-3">
                  Vi hanterar all administration
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Du behöver inte oroa dig för pappersarbete eller omregistrering, vi sköter allt
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl">
              <div className="shrink-0">
                <svg className="w-12 h-12 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-title text-dark-blue mb-3">
                  Rikstäckande service
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Vi köper och säljer lastbilar i hela Sverige och kan hämta eller leverera var du än befinner dig
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-white">
       <OurLager/>
      </section>

      <Footer />
    </div>
  );
}
