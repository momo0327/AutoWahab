import Navbar from './components/Navbar';
import OffertForm from './components/OffertForm';
import OmOss from './components/OmOss';
import EasySteps from './components/EasySteps';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/test6.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
          <h1 className="text-4xl md:text-7xl font-title font-bold mb-4">
            Vi köper lastbilar <br /> tryggt & enkelt
          </h1>
          <p className="text-sm md:text-xl text-white/80 mb-8 max-w-sm md:max-w-xl">
            Vi köper era lastbilar snabbt, enkelt och tryggt. Få en rättvis värdering och betalt direkt. Kontakta oss idag för en kostnadsfri offert!
          </p>
          <a
            href="#offert-form"
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full font-title text-base hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <span>Begär Offert</span>
            <div className="bg-white rounded-full p-2">
              <svg
                className="w-4 h-4 text-dark-blue"
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
          </a>
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
