import Image from 'next/image';
import CTAButton from './CTAButton';
import Badge from './Badge';

export default function OurLager() {
  const trucks = [
    { id: 1, image: '/1.jpg', alt: 'Lastbil 1' },
    { id: 2, image: '/2.jpg', alt: 'Lastbil 2' },
    { id: 3, image: '/3.jpg', alt: 'Lastbil 3' },
    { id: 4, image: '/4.jpg', alt: 'Lastbil 4' },
    { id: 5, image: '/5.jpg', alt: 'Lastbil 5' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">
          <div>

            <Badge content="Våra bilar i lager" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-title text-dark-blue uppercase leading-tight">
              ute efter en lastbil?
            </h2>
            <p className="text-lg text-gray-600">
              Vi har en bred selektion av lastbilar i lager. Titta in och hitta den perfekta lastbilen för dina behov.
            </p>
          </div>
          <div className="md:mb-2">
            <CTAButton
              text="Se alla lastbilar"
               href="https://www.blocket.se/mobility/dealer/4729472/auto-wahab-export-ab"
              bgColor="dark-blue"
            />
          </div>
        </div>
      </div>

      {/* Images Horizontal Scroll - Overflow to right edge */}
      <div className="overflow-x-auto pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 md:gap-8 pr-4 md:pr-[max(1rem,calc((100vw-80rem)/2))]">
          {trucks.map((truck) => (
            <div
              key={truck.id}
              className="relative w-[320px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={truck.image}
                alt={truck.alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
