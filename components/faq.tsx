"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { HOLIDAY, isHolidayActive } from "@/lib/site-config"

const kitQuestions = [
  { question: "What’s in a starter kit?", answer: <>Your hand-painted canvas, every thread color for the design, a needle, embroidery scissors, and Your First Stitch: our printed step-by-step guide plus a video walkthrough.</> },
  { question: "I’ve never done needlepoint. Is this for me?", answer: <>Yes. Every kit is designed for first-timers. Your First Stitch walks you through it step by step, and the video shows you exactly how each stitch looks.</> },
  { question: "Are the canvases really hand-painted?", answer: <>Yes. We paint every canvas ourselves, so yours may differ slightly from the photo. That’s what makes it one of a kind.</> },
  { question: "Can I buy extra canvases?", answer: <>Yes. Add canvases to your order for $20 each. Canvas-only items don’t include thread, needle, scissors, or the guide.</> },
  { question: "When will my order ship? Will it arrive by Christmas?", answer: null },
  { question: "Is this kit safe for kids?", answer: <>Our kits include a sharp needle and scissors and are made for adults. They’re not toys, so keep them away from young children and pets.</> },
  { question: "What if something’s wrong with my order?", answer: <>See our <Link className="underline underline-offset-2" href="/refund-policy">Refund &amp; Return Policy</Link> or email <a className="underline underline-offset-2" href="mailto:TheHobbyHoppersClub@gmail.com">TheHobbyHoppersClub@gmail.com</a>.</> },
]
const clubQuestions = [
  { question: "What is the Hobby Hoppers Club?", answer: <>A monthly subscription that sends you a new beginner-friendly hobby kit every month. We’re starting with needlepoint, with more hobbies on the way.</> },
  { question: "When does it launch?", answer: <>We’ll open the Club to founding members on the waitlist first. <Link className="underline underline-offset-2" href="/#club">Join the waitlist</Link> to be the first to know.</> },
  { question: "How much will it cost?", answer: <>We’ll share Club pricing with founding members before launch, and they’ll get early-bird pricing.</> },
  { question: "Can I choose my hobby each month?", answer: <>Absolutely! You’ll be able to browse available hobbies and select the one that interests you most. We’ll also offer a “surprise me” option for the adventurous souls who want us to pick for them.</> },
]

function AccordionGroup({ title, items, holidayActive, open, setOpen, offset }: { title: string; items: typeof kitQuestions; holidayActive: boolean; open: number | null; setOpen: (value: number | null) => void; offset: number }) {
  return <div className="mb-10"><h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{title}</h3><div className="flex flex-col gap-3">{items.map((item, index) => { const id = offset + index; const expanded = open === id; return <article key={item.question} className="overflow-hidden rounded-2xl border border-border bg-card"><h4><button type="button" aria-expanded={expanded} aria-controls={`faq-answer-${id}`} onClick={() => setOpen(expanded ? null : id)} className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left hover:bg-secondary/30 md:px-6"><span className="font-serif text-lg">{item.question}</span><span aria-hidden="true" className="shrink-0 text-2xl leading-none text-primary">{expanded ? "−" : "+"}</span></button></h4><div id={`faq-answer-${id}`} aria-hidden={!expanded} className={`grid transition-[grid-template-rows] duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><div className="px-5 pb-5 leading-relaxed text-muted-foreground md:px-6">{item.answer ?? <>{`Orders ship in 3–5 business days, and shipping cost is shown at checkout. `}{holidayActive && <><strong className="font-semibold text-foreground">{HOLIDAY.message}.</strong>{" Orders after that still ship quickly, but we can’t promise delivery by Christmas. "}</>}<Link className="underline underline-offset-2" href="/shipping-policy">See our Shipping Policy</Link>.</>}</div></div></div></article> })}</div></div>
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [holidayActive, setHolidayActive] = useState(false)
  useEffect(() => setHolidayActive(isHolidayActive()), [])
  return <section id="faq" className="scroll-mt-32 px-6 py-20"><div className="mx-auto max-w-3xl"><div className="mb-12 text-center"><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">FAQ</p><h2 className="font-serif text-4xl md:text-5xl">Questions? We&apos;ve got answers</h2></div><AccordionGroup title="Needlepoint Kits" items={kitQuestions} holidayActive={holidayActive} open={open} setOpen={setOpen} offset={0} /><AccordionGroup title="The Hobby Hoppers Club" items={clubQuestions} holidayActive={holidayActive} open={open} setOpen={setOpen} offset={kitQuestions.length} /></div></section>
}
