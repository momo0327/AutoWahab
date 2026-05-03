import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Badge from '../components/Badge';
import FAQ from '../components/FAQ';
import KontaktForm from './KontaktForm';
import CTA from '../components/CTA';

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left - Title + Contact Info */}
            <div className="lg:col-span-1">
              <div className="py-3">
                <Badge content="Kontakt" />
              </div>
              <h1 className="text-4xl md:text-5xl font-title text-dark-blue leading-tight mb-4 uppercase">
                Kom i kontakt med oss idag
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Vi finns här för dig. Hör av dig via telefon, e-post eller besök oss på plats.
              </p>

              {/* Contact Details */}
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 bg-dark-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">E-post</p>
                    <a href="mailto:info@autowahab.se" className="text-dark-blue font-semibold text-base hover:text-light-blue transition-colors">
                      info@autowahab.se
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 bg-dark-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Telefon</p>
                    <a href="tel:+46762760005" className="text-dark-blue font-semibold text-base hover:text-light-blue transition-colors">
                      +46 76 276 00 05
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 bg-dark-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Adress</p>
                    <p className="text-dark-blue font-semibold text-base">
                      Gamlestadsvägen 20A<br />
                      415 02 Göteborg
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                {/* <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 bg-dark-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Öppettider</p>
                    <div className="space-y-0.5 text-base">
                      <div className="flex gap-4">
                        <span className="text-dark-blue font-semibold w-24">Mån – Fre</span>
                        <span className="text-gray-600">08:00 – 17:00</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-dark-blue font-semibold w-24">Lördag</span>
                        <span className="text-gray-600">10:00 – 14:00</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-dark-blue font-semibold w-24">Söndag</span>
                        <span className="text-gray-600">Stängt</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="md:text-3xl text-xl font-title text-dark-blue mb-1 uppercase">Skicka ett meddelande</h2>
              <p className="text-gray-500 mb-7 text-sm">Fyll i formuläret så återkommer vi inom kort.</p>
              <KontaktForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
