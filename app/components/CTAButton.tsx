import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  bgColor?: 'white' | 'dark-blue';
}

export default function CTAButton({ text, href, bgColor = 'white' }: CTAButtonProps) {
  const isWhiteBg = bgColor === 'white';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-between gap-3 px-4 py-2 rounded-md text-sm font-bold  transition-all duration-300 ${
        isWhiteBg
          ? 'bg-white text-dark-blue hover:bg-gray-50'
          : 'bg-dark-blue text-white hover:bg-light-blue'
      }`}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <span>{text}</span>
      <div
        className={`rounded-lg p-1.5 ${
          isWhiteBg ? 'bg-dark-blue' : 'bg-white'
        }`}
      >
        <svg
          className={`w-4 h-4 ${isWhiteBg ? 'text-white' : 'text-dark-blue'}`}
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
    </Link>
  );
}
