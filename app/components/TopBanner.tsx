export default function TopBanner() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#141414] text-white py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        {/* Left side - Contact Info */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+46762760005" className="flex items-center gap-2 hover:text-light-blue transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <span>+46 76-276 00 05</span>
          </a>
          <a href="mailto:info@autowahab.se" className="flex items-center gap-2 hover:text-light-blue transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@autowahab.se</span>
          </a>
        </div>

        {/* Right side - Location */}
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Gamlestadsvägen 20A Göteborg, Sverige</span>
        </div>
      </div>
    </div>
  );
}
