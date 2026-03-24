"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What hobbies will be included?",
    answer: "We're starting with a carefully curated selection including crochet, watercolor painting, sourdough baking, candle making, calligraphy, and more. Our selection will grow based on community feedback—so join the waitlist and let us know what you'd love to try!",
  },
  {
    question: "How much will it cost?",
    answer: "We're finalizing pricing, but expect boxes in the $35-50 range depending on the hobby. Each box will include premium supplies worth significantly more than the subscription cost. Early supporters will receive exclusive discounts.",
  },
  {
    question: "Can I choose my hobby each month?",
    answer: "Absolutely! You'll be able to browse available hobbies and select the one that interests you most. We'll also offer a 'surprise me' option for the adventurous souls who want us to pick for them.",
  },
  {
    question: "When does it launch?",
    answer: "We're planning to ship our first boxes in late 2026. Join the waitlist now to be among the first to know when pre-orders open—and to get an exclusive early bird discount.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Questions? We&apos;ve got answers
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-secondary/30 transition-colors"
              >
                <span className="font-serif text-lg text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
