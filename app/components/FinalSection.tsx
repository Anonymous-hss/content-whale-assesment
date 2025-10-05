"use client";
import { Phone } from "lucide-react";

export default function StartSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FBF8FF] to-white flex justify-center">
      <div className="max-w-5xl w-full mx-4 md:mx-auto">
        <div className="rounded-[32px] bg-white text-center shadow-[0_0_60px_#F2E4FF] p-12 md:p-16 border border-[#F3EAFD]">
          {/* Phone Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#42175B] text-white p-4 rounded-full">
              <Phone size={28} strokeWidth={2.3} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-6">
            So, let’s start, shall we?
          </h2>

          {/* CTA Button */}
          <a
            href="/contact-customer.php"
            className="inline-block bg-[#42175B] text-white px-8 py-3.5 rounded-xl text-[16px] font-medium shadow-md hover:bg-[#5C2B80] transition-all duration-300"
          >
            Connect me to an expert!
          </a>

          {/* Icons Row */}
          <div className="mt-10 flex text-sm md:flex-row justify-center items-center gap-6 md:gap-12 text-[#1E1E1E] text-[16px] font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#FFC000]">⭐</span> Best quality
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FFC000]">⭐</span> Top experts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FFC000]">⭐</span> Quickest delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
