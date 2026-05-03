import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-bg rounded-2xl px-8 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Text and Buttons */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-title text-dark-blue mb-4 uppercase leading-tight">
              Köp eller sälj en din lastbil
            </h2>
            <p className="text-dark-blue/80 text-lg mb-8">
              Vi hjälper dig med hela processen — snabbt, enkelt och tryggt.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/#offert-form"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-dark-blue text-white rounded-xl font-bold text-sm hover:bg-light-blue transition-colors duration-300 w-full sm:w-auto"
              >
                Få en offert
                <div className="rounded-lg p-1 bg-white">
                  <svg className="w-4 h-4 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-dark-blue text-dark-blue rounded-xl font-bold text-sm hover:bg-dark-blue hover:text-white transition-colors duration-300 w-full sm:w-auto"
              >
                Kontakta oss
                <div className="rounded-lg p-1 bg-dark-blue">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right - Truck Image */}
          {/* <div className="relative h-72 md:h-96">
            <Image
              src="/test7.jpg"
              alt="Lastbil"
              fill
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
