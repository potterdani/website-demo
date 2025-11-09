
import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => (
  <details className="border-b border-gray-200 py-4 cursor-pointer group">
    <summary className="flex justify-between items-center text-xl font-semibold font-heading list-none">
      {question}
      <svg className="w-5 h-5 transition-transform duration-300 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <p className="mt-4 pb-2 text-lg text-gray-700 font-body">
      {answer}
    </p>
  </details>
);

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: '"Nincs erre időm."',
      answer: 'Pontosan ezért van szükséged rá. A rendszer nem időt vesz el, hanem visszaadja azt, amit a felesleges döntéshozatalra, stresszre és káoszra pazarolsz. A célunk, hogy kevesebb dologgal többet érj el, így felszabadítva a mentális kapacitásodat.'
    },
    {
      question: '"Mi van, ha nem működik?"',
      answer: 'Ez nem egy dobozos program. A Habityield arról szól, hogy megtaláljuk, ami a TE életedben hosszú távon működik. A folyamatos támogatás és finomhangolás biztosítja, hogy a rendszer ellenálljon az élet változásainak.'
    },
    {
      question: '"Miben más ez, mint egy online edzésterv?"',
      answer: 'Ez a szolgáltatás a gondolkodásmódról, a fókuszról, a döntéshozatalról és a regenerációról szól, nem pedig a súlyok emeléséről. Mi az alapvető rendszert építjük fel, ami lehetővé teszi, hogy *minden más* (beleértve az edzést) a helyére kerüljön. Ez a stratégiai szintű optimalizáció.'
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-4 md:px-8 bg-brand-bg-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl mb-12 text-center font-heading">Gyakran Ismételt Kérdések</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
