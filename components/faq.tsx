"use client"

import { useState } from "react"
import Link from "next/link"
import { HOLIDAY } from "@/lib/site-config"
import { useHolidayActive } from "@/hooks/use-holiday-active"

type FAQItem = { question: string; answer: React.ReactNode }

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  const holidayActive = useHolidayActive()
  const kitQuestions: FAQItem[] = [
    { question: "What's in a starter kit?", answer: <>Your hand-painted canvas, every thread color for the design, a needle, embroidery scissors, and Your First Stitch: our printed step-by-step guide plus a video walkthrough.</> },
    { question: "I've never done needlepoint. Is this for me?", answer: <>Yes. Every kit is designed for first-timers. Your First Stitch walks you through it step by step, and the video shows you exactly how each stitch looks.</> },
    { question: "Are the canvases really hand-painted?", answer: <>Yes. We paint every canvas ourselves, so yours may differ slightly from the photo. That&apos;s what makes it one of a kind.</> },
    { question: "Can I buy extra canvases?", answer: <>Yes. Add canvases to your order for $20 each. Canvas-only items don&apos;t include thread, needle, scissors, or the guide.</> },
    { question: "When will my order ship? Will it arrive by Christmas?", answer: <>Orders ship in 3–5 business days, and shipping cost is shown at checkout. {holidayActive && <><strong>{HOLIDAY.message}.</strong> Orders after that still ship quickly, but we can&apos;t promise delivery by December 25. </>}See our <Link className="underline underline-offset-2" href="/shipping-policy">Shipping Policy</Link>.</> },
    { question: "Is this kit safe for kids?", answer: <>Our kits include a sharp needle and scissors and are made for adults. They&apos;re not toys, so keep them away from young children and pets.</> },
    { question: "What if something's wrong with my order?", answer: <>See our <Link className="underline underline-offset-2" href="/refund-policy">Refund &amp; Return Policy</Link> or email <a className="underline underline-offset-2" href="mailto:TheHobbyHoppersClub@gmail.com">TheHobbyHoppersClub@gmail.com</a>.</> },
  ]
  const clubQuestions: FAQItem[] = [
    { question: "What is the Hobby Hoppers Club?", answer: <>A monthly subscription that sends you a new beginner-friendly hobby kit every month. We&apos;re starting with needlepoint, with more hobbies on the way.</> },
    { question: "When does it launch?", answer: <>We&apos;ll open the Club to founding members on the waitlist first. <Link href="/#waitlist" className="underline underline-offset-2">Join the waitlist</Link> to be the first to know.</> },
    { question: "How much will it cost?", answer: <>We&apos;ll share Club pricing with founding members before launch, and they&apos;ll get early-bird pricing.</> },
    { question: "Can I choose my hobby each month?", answer: <>Absolutely! You&apos;ll be able to browse available hobbies and select the one that interests you most. We&apos;ll also offer a &apos;surprise me&apos; option for the adventurous souls who want us to pick for them.</> },
  ]

  const groups = [
    { heading: "Needlepoint Kits", items: kitQuestions, prefix: "kits" },
    { heading: "The Hobby Hoppers Club", items: clubQuestions, prefix: "club" },
  ]

  return (
    <section id="faq" className="bg-secondary/50 px-6 py-24 scroll-mt-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="font-serif text-4xl text-foreground text-balance md:text-5xl">Questions? We&apos;ve got answers</h2>
        </div>
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.prefix}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">{group.heading}</h3>
              <div className="space-y-4">
                {group.items.map((faq, index) => {
                  const itemId = `${group.prefix}-${index}`
                  const isOpen = openIndex === itemId
                  const answerId = `faq-answer-${itemId}`
                  return (
                    <div key={itemId} className="overflow-hidden rounded-2xl border border-border bg-card">
                      <h4>
                        <button
                          type="button"
                          id={`faq-question-${itemId}`}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenIndex(isOpen ? null : itemId)}
                          className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <span className="font-serif text-lg text-foreground">{faq.question}</span>
                          <span aria-hidden="true" className="shrink-0 text-2xl leading-none text-primary">{isOpen ? "−" : "+"}</span>
                        </button>
                      </h4>
                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={`faq-question-${itemId}`}
                        aria-hidden={!isOpen}
                        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-in-out ${isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
