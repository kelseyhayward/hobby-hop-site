"use client";
import { useEffect } from "react";

import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { HobbyGrid } from "@/components/hobby-grid"
import { WhatsInTheBox } from "@/components/whats-in-the-box"
import { EarlyAccess } from "@/components/early-access"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {

  useEffect(() => {
    const emailInput = document.querySelector('input[type="email"]');
    const button = document.querySelector('button[type="submit"]');

    if (!emailInput || !button) return;

    const handleClick = async (e) => {
      e.preventDefault();

      const email = emailInput.value?.trim();
      if (!email) {
        alert("Please enter your email");
        return;
      }

      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });

        if (!res.ok) throw new Error();

        alert("You're on the waitlist!");
        emailInput.value = "";
      } catch (err) {
        alert("Something went wrong. Try again.");
      }
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <HobbyGrid />
      <WhatsInTheBox />
      <EarlyAccess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
