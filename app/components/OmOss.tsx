import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';

export default function OmOss() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
          <Badge content="Om oss" />

          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-title text-dark-blue uppercase">
Din pålitliga partner för köp och försäljning, i Sverige och internationellt
            </h2>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Square Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/test5.jpg"
              alt="AutoWahab Lastbilar"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Middle: Statistics Card */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="text-center space-y-6">
              <div>
                <div className="text-7xl md:text-8xl font-bold text-dark-blue mb-4" style={{ WebkitTextStroke: '2px', WebkitTextFillColor: 'transparent', WebkitTextStrokeColor: '#1e3a8a' }}>
                  200+
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  Lastbilar köpta per år
                </p>
              </div>
              <div>
                <div className="text-7xl md:text-8xl font-bold text-dark-blue mb-4" style={{ WebkitTextStroke: '2px', WebkitTextFillColor: 'transparent', WebkitTextStrokeColor: '#1e3a8a' }}>
                  20+
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  Länder exporterat till
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text and CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              Med över 20 års erfarenhet i branschen arbetar vi med försäljning och köp av lastbilar för företag i Sverige och internationellt.
            </p>

            {/* Check List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-light-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Vi kompromissar aldrig med säkerhet</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-light-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Över 20 års erfarenhet av lastbilshandel</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-light-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Vi hämtar vart än du befinner dig i Sverige
</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-3 border-2 bg-dark-blue text-white px-4 py-2 rounded-md font-bold text-base hover:bg-dark-blue hover:text-white transition-all duration-300 w-fit text-sm"
            >
              <span>Läs mer om oss</span>
              <div className="bg-white rounded-sm p-2">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
