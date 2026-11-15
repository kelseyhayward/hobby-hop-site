import Link from "next/link"
import { PolicyEmail, PolicyLayout } from "@/components/policy-layout"

export default function TermsPage() {
  return <PolicyLayout title="Terms of Service">
    <p>These terms apply when you use thehobbyhop.com or buy from The Hobby Hop, a business name of AML Strategies LLC, a Texas limited liability company (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). You&apos;ll be asked to agree to these terms at checkout. By placing an order, you agree to them.</p>
    <p>By purchasing and using the kits, you agree to use the materials as directed and to keep sharp tools and small parts away from children and pets. By purchasing and using our products, you accept the risks of using needles, scissors, and other tools. To the fullest extent allowed by law, AML Strategies LLC is not responsible for injury resulting from misuse, failure to follow instructions, or use by children.</p>
    <p><strong>1. Eligibility.</strong> You must be at least 18 years old to place an order.</p>
    <p><strong>2. Our products are handmade.</strong> We sell needlepoint kits and canvases. Every canvas is hand-painted by us, so colors, lines, and details will vary slightly from our photos and from piece to piece. These variations are part of handmade work and are not defects. Colors may also look different on your screen. We may substitute kit materials of equal or better quality when a supplier runs out.</p>
    <p><strong>3. Orders and pricing.</strong> All prices are in U.S. dollars. Placing an order is an offer to buy; it&apos;s accepted when we ship it. We may cancel an order and give a full refund if an item is out of stock, a price was listed in error, or we suspect fraud. Prices may change at any time but won&apos;t change on an order you&apos;ve already placed.</p>
    <p><strong>4. Payment and sales tax.</strong> Payment is due at checkout and is processed securely by Stripe. We collect sales tax where required by law, and the amount is shown at checkout.</p>
    <p><strong>5. Shipping, returns, and refunds.</strong> Our <Link className="underline underline-offset-4" href="/shipping-policy">Shipping Policy</Link> and <Link className="underline underline-offset-4" href="/refund-policy">Refund &amp; Return Policy</Link> are part of these terms.</p>
    <p><strong>6. Product safety and assumption of risk.</strong> Our kits contain sharp tools, including needles and scissors, and small parts. They are intended for adults, are not toys, and should be kept away from children and pets. Use all materials only as described in the instructions and with reasonable care. By purchasing and using our products, you acknowledge these risks and accept responsibility for using the materials safely. To the fullest extent allowed by law, AML Strategies LLC is not responsible for injury or damage resulting from misuse of the products, failure to follow the instructions, or use by children.</p>
    <p><strong>7. Our content.</strong> Our designs, patterns, instructions, videos, photos, logo, and site content belong to AML Strategies LLC. You may use them for personal, non-commercial use and keep what you make. You may not copy, resell, or redistribute our designs, patterns, or instructions. Sharing photos of your finished project is welcome — tag us on Instagram @thehobbyhopclub or TikTok @TheHobbyHopClub.</p>
    <p><strong>8. The Hobby Hoppers Club.</strong> Joining our waitlist is free and does not start a subscription or create any charge. When the Club launches, it will come with its own terms, shown to you before you sign up.</p>
    <p><strong>9. Disclaimer.</strong> Except as stated in our policies, the site and our products are provided &quot;as is.&quot; To the fullest extent allowed by law, we disclaim implied warranties, including merchantability and fitness for a particular purpose.</p>
    <p><strong>10. Limitation of liability.</strong> To the fullest extent allowed by law, we are not liable for indirect, incidental, or consequential damages, and our total liability for any claim related to an order is limited to the amount you paid for that order. Some states don&apos;t allow these limits, so they may not fully apply to you.</p>
    <p><strong>11. Governing law.</strong> These terms are governed by the laws of the State of Texas. Any dispute will be resolved in the state or federal courts located in Texas, unless the law requires otherwise.</p>
    <p><strong>12. Changes.</strong> We may update these terms. The version posted on this page applies to orders placed while it is in effect.</p>
    <p><strong>13. Find us on social media.</strong></p>
    <ul>
      <li>Instagram: <a href="https://www.instagram.com/thehobbyhopclub" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@thehobbyhopclub</a></li>
      <li>TikTok: <a href="https://www.tiktok.com/@thehobbyhopclub" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@TheHobbyHopClub</a></li>
      <li>YouTube: <a href="https://www.youtube.com/@TheHobbyHop" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@TheHobbyHop</a></li>
      <li>Pinterest: <a href="https://www.pinterest.com/TheHobbyHop" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">TheHobbyHop</a></li>
    </ul>
    <p><strong>14. Contact.</strong> AML Strategies LLC d/b/a The Hobby Hop, PO Box 796532, Dallas, TX 75379, <PolicyEmail />.</p>
  </PolicyLayout>
}
