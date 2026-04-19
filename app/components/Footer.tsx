import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-bg text-dark-blue py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo1.png"
                alt="AutoWahab Logo"
                width={150}
                height={60}
                className="h-auto w-64 md:w-auto"
                unoptimized
              />
            </div>
            <p className="text-gray-900 text-sm leading-relaxed">
              Din pålitliga partner för lastbilsköp i hela Sverige. Vi erbjuder snabba och rättvisa värderingar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-900 hover:text-light-blue transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-900 hover:text-light-blue transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <a href="https://www.blocket.se" target="_blank" rel="noopener noreferrer" className="text-gray-900  hover:text-light-blue transition-colors">
                  Blocketbutik
                </a>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-900  hover:text-light-blue transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakta Oss</h4>
            <ul className="space-y-2 text-gray-900 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+46701234567" className="hover:text-light-blue transition-colors">
                  +46 70 123 45 67
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@autowahab.se" className="hover:text-light-blue transition-colors">
                  info@autowahab.se
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Lastbilsvägen 123<br />
                  <span className="ml-7">123 45 Stockholm</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Öppettider</h4>
            <ul className="space-y-2 text-gray-900 text-sm">
              <li className="flex justify-between">
                <span>Måndag - Fredag:</span>
                <span className="font-medium">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag:</span>
                <span className="font-medium">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Söndag:</span>
                <span className="font-medium">Stängt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-900">
            <p>&copy; 2024 AutoWahab. Alla rättigheter förbehållna.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-light-blue transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-light-blue transition-colors">
                Villkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
