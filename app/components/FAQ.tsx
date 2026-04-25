'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Vart finns ni?",
    answer: "Vi finns i Göteborg, Gamlestadsvägen 20A"
  },
  {
    question: "Köper ni i hela Sverige?",
    answer: "Ja, vi köper lastbilar i hela Sverige och kan hämta var du än befinner dig."
  },
  {
    question: "Vilka modeller köper ni?",
    answer: "Vi köper alla typer av lastbilar, allt från dragbilar, skåpbilar, kranbilar, kranväxlare, krokbilar, timmerbilar, chassi osv."
  },
  {
    question: "Vilka märken köper ni?",
    answer: "Vi alla märken, Volvo, Scania, Mercedes, Man och Daf"
  },
  {
    question: "Hur fungerar betalningen?",
    answer: "Vi betalar direkt efter vi har fått fakturan"
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
        <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-blue mb-4 text-center uppercase">
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
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
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
