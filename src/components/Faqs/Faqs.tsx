import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface FaqData {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2.5 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <div
        className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <span className="text-blue-600 font-bold text-left text-lg md:text-xl">{question}</span>
        <span
          className="ml-4 text-blue-600 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
      <div
        className={`bg-[#f2f2f2] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 border-t border-gray-200' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        {typeof answer === 'string' ? (
          <p className="px-4 text-gray-800 leading-relaxed text-lg">{answer}</p>
        ) : (
          <div className="px-4 text-gray-800 leading-relaxed text-lg space-y-2">{answer}</div>
        )}
      </div>
    </div>
  );
};

const faqData: FaqData[] = [
  {
    question: 'Q: What Guns Work With This System?',
    answer:
      'A: Right now, the Laser Strike is available in the following calibers: 9mm, .45mm, .40 S&W, and .380 ACP. If you don’t see your caliber, just know we plan on adding more very soon!',
  },
  {
    question: 'Q: Does Lack of Recoil Make This Less Effective Than Live Rounds?',
    answer:
      'A: No! This is a huge myth. The effectiveness of dry fire training lies in the fact that recoil isn’t connected to the accuracy of your shot. Since the gun doesn’t kick until the bullet has exited the barrel, your precision and aim alone are what dictate accuracy.',
  },
  {
    question: 'Q: How Much Space Do I Need to Set It Up?',
    answer:
      'A: The Laser Strike is intended for use at a minimum of 3 yards, and the laser can be shot up to 15-20 yards accurately. So it’s easy to use in tight spaces or at longer distances. Keep in mind though, it’s designed for indoor use.',
  },
  {
    question: 'Q: Will the App Work On My Phone?',
    answer:
      'A: Yes, the smartphone app needed to use the Laser Strike System is available for all Apple and Android phones.',
  },
  {
    question: 'Q: Does this holster work with slide-mounted optics (Red dots, etc)?',
    answer: (
      <div>
        <p>
          A: It depends, if you are using a single and double action weapon you can manually reset
          the hammer without the need to rerack the slide for a reset. Internally hammer-fired guns
          like Glocks will require re-racking between each shot.
        </p>
        <p>
          If you understand that proper dryfire is not affected with re-racking, this is a non-issue
          and won't be creating any bad habits.
        </p>
      </div>
    ),
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleFaqClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
