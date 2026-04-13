import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-dark-blue rounded-2xl px-8 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text and Button */}
          <div>
            <h2 className="text-3xl md:text-5xl font-title font-bold text-white mb-8">
              Nyfiken eller intresserad?
              Kontakta oss
            </h2>
            <a
              href="/kontakt"
              className="inline-block bg-light-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-light-blue/80 transition-colors duration-300"
            >
              Kontakta Oss
            </a>
          </div>

          {/* Right side - Truck Image */}
          <div className="relative h-96">
            <Image
              src="/truck.png"
              alt="Lastbil"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
