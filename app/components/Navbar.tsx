'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = transparent && !isScrolled;

  return (
    <nav
      className={`fixed md:absolute top-0 md:top-8 left-0 right-0 z-40 transition-colors duration-300 md:bg-transparent ${
        isTransparent ? 'bg-transparent' : 'bg-white shadow-md md:shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[5]">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center md:justify-center justify-start">
            <Image
              src={isTransparent ? "/logo2.png" : "/logo3.png"}
              alt="AutoWahab Logo"
              width={250}
              height={100}
              className="h-8 md:h-10 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`hover:opacity-80 text-sm font-bold transition-opacity  ${
                isTransparent ? 'text-white' : 'text-dark-blue'
              }`}
            >
              Hem
            </Link>
            <Link
              href="/om-oss"
              className={`hover:opacity-80 text-sm font-bold transition-opacity  ${
                isTransparent ? 'text-white' : 'text-dark-blue'
              }`}
            >
              Om Oss
            </Link>
            <a
              href="https://www.blocket.se"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-80 transition-opacity font-bold  text-sm  ${
                isTransparent ? 'text-white' : 'text-dark-blue'
              }`}
            >
              Blocketbutik
            </a>
            <a
              href="tel:0723364384"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-title text-sm font-bold transition-all duration-300 ${
                isTransparent
                  ? 'bg-white/90 backdrop-blur-md text-dark-blue border border-white/50 hover:bg-white'
                  : 'bg-dark-blue text-white border border-dark-blue hover:bg-dark-blue/90'
              }`}
            >
              <span className='font-bold'>Ring oss idag</span>
              <div className={`rounded-full p-1.5 ${
                isTransparent ? 'bg-dark-blue' : 'bg-white'
              }`}>
                <svg
                  className={`w-4 h-4 ${
                    isTransparent ? 'text-white' : 'text-dark-blue'
                  }`}
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
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isTransparent ? 'text-white' : 'text-dark-blue'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white rounded-lg mt-2">
            <div className="flex flex-col space-y-4 px-4 py-4">
              <Link
                href="/"
                className="text-dark-blue hover:text-light-blue"
                onClick={() => setIsOpen(false)}
              >
                Hem
              </Link>
              <Link
                href="/om-oss"
                className="text-dark-blue hover:text-light-blue"
                onClick={() => setIsOpen(false)}
              >
                Om Oss
              </Link>
              <a
                href="https://www.blocket.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-light-blue"
              >
                Blocketbutik
              </a>
              <a
                href="tel:0723364384"
                className="inline-flex items-center justify-center gap-2 bg-dark-blue text-white px-4 py-2 rounded-full font-title text-sm hover:bg-dark-blue/90 transition-all duration-300 border border-dark-blue"
                onClick={() => setIsOpen(false)}
              >
                <span>Ring oss idag</span>
                <div className="bg-white rounded-full p-1.5">
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
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
