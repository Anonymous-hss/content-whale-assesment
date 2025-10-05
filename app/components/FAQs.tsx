"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqsLeft: FAQ[] = [
  {
    question: "What Is Your Turn-Around-Time For Content Delivery?",
    answer:
      "Our delivery time depends on the project’s scope. Most content pieces are delivered within 48–72 hours after confirmation.",
  },
  {
    question:
      "Agencies Have Problems Understanding Our Business, How Can We Trust Content Whale?",
    answer:
      "We have industry-specialized writers who research and adapt your tone, ensuring your business goals are accurately reflected in the content.",
  },
  {
    question: "Does Content Whale Serve My Niche?",
    answer:
      "Yes! We cover 45+ content categories across multiple industries including healthcare, tech, finance, and lifestyle.",
  },
];

const faqsRight: FAQ[] = [
  {
    question: "How Much Does Content Cost At Content Whale?",
    answer:
      "Our pricing is transparent and project-based. It depends on content type, length, and complexity — get a custom quote anytime.",
  },
  {
    question: "Do You Provide Customized Or Personalized Content?",
    answer:
      "Yes. Every piece of content is tailor-made for your brand voice, SEO goals, and target audience.",
  },
  {
    question: "How Can We Trust The Quality Of Your Content?",
    answer:
      "We follow strict QA processes, multiple editorial checks, and plagiarism scans to maintain top-tier quality.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative bg-gradient-to-b from-[#FCFAFF] to-[#F9FBFF] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#3A2A53] mb-12">
          Content Writing Agency FAQs
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          {faqsLeft.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-[#3A2A53] focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-[#3A2A53]/80 text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
              <div className="border-b border-[#DDD] mt-3"></div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          {faqsRight.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index + 10)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-[#3A2A53] focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index + 10 ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index + 10 ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-[#3A2A53]/80 text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
              <div className="border-b border-[#DDD] mt-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
