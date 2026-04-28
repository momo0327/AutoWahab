import Navbar from './components/Navbar';
import OffertForm from './components/OffertForm';
import OmOss from './components/OmOss';
import EasySteps from './components/EasySteps';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Mobile background */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/MobileHeader.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/test6.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-title  mb-4 uppercase">
            Vi köper lastbilar <br /> tryggt & enkelt
          </h1>
          <p className="text-md md:text-xl text-white/80 mb-8 max-w-sm md:max-w-xl">
            Med över 20 års erfarenhet köper och säljer vi lastbilar med en smidig och trygg process från start till betalning. Kontakta oss för en enkel och smidig affär.
          </p>
          {/* <a
            href="#offert-form"
            className="inline-flex items-center gap-3 bg-white text-dark-blue px-5 py-2 rounded-md  text-base hover:bg-white/30 transition-all duration-300 border border-white/30 font-bold"
          >
            <span>Sälj din Lastbil</span>
            <div className="bg-dark-blue rounded-sm p-2">
              <svg
                className="w-6 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </a> */}

          <CTAButton text="Sälj din Lastbil" href="#offert-form" />
        </div>
      </section>

      <OffertForm />
      <OmOss />
      <EasySteps />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
