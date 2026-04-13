'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Hur snabbt kan ni köpa min lastbil?",
    answer: "Vi kontaktar dig inom 24 timmar med ett erbjudande. Om du accepterar kan vi hämta lastbilen och betala dig inom några dagar, beroende på var du befinner dig i Sverige."
  },
  {
    question: "Vilka märken köper ni?",
    answer: "Vi köper lastbilar av alla märken - Volvo, Scania, MAN, Mercedes-Benz, DAF, Iveco och många fler. Oavsett märke, modell eller ålder kontaktar du oss för en värdering."
  },
  {
    question: "Måste lastbilen vara i körbart skick?",
    answer: "Nej, vi köper lastbilar i alla skick - körklara, reparationsbehövande eller skrotbilar. Beskriv bara skicket noggrant i formuläret så ger vi dig ett rättvist pris."
  },
  {
    question: "Hur fungerar betalningen?",
    answer: "Du får betalt direkt när vi hämtar lastbilen. Vi överför pengarna till ditt bankkonto eller betalar kontant om du föredrar det."
  },
  {
    question: "Köper ni lastbilar i hela Sverige?",
    answer: "Ja, vi köper lastbilar i hela Sverige och kan hämta var du än befinner dig. Transporten är inkluderad i vårt erbjudande."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-blue mb-4 text-center">
          Vanliga Frågor
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Här hittar du svar på de vanligaste frågorna om att sälja din lastbil till oss
        </p>

        <div className="divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 text-left flex justify-between items-center"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue/70 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="pb-6 pt-2 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Har du fler frågor?
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-dark-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-blue transition-colors duration-300"
          >
            Kontakta Oss
          </a>
        </div> */}
      </div>
    </section>
  );
}
