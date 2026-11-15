import { PolicyEmail, PolicyLayout } from "@/components/policy-layout"

export default function ShippingPolicyPage() {
  return <PolicyLayout title="Shipping Policy">
    <p>The Hobby Hop ships needlepoint kits and canvases to addresses in all 50 U.S. states.</p>
    <p><strong>Where we ship.</strong> We ship to street addresses and PO boxes in all 50 states, including Alaska and Hawaii. We do not currently ship outside the United States, including to U.S. territories or APO/FPO addresses.</p>
    <p><strong>Processing time.</strong> Every order is packed by hand and ships within 3–5 business days of purchase, not counting weekends and U.S. holidays.</p>
    <p><strong>Delays.</strong> During launches or busy seasons, processing may take a little longer. We&apos;ll email you if your order is delayed.</p>
    <p><strong>Shipping cost and carriers.</strong> Shipping charges are shown at checkout before you pay. We ship with USPS or UPS, chosen by us for each order. Most orders arrive within 2–7 business days after they ship, but delivery times are carrier estimates and are not guaranteed.</p>
    <p><strong>Holiday orders.</strong> Any &quot;order by&quot; date shown on our site for holiday delivery is our best estimate based on carrier guidance. Carriers do not guarantee holiday delivery, so we can&apos;t either.</p>
    <p><strong>Tracking.</strong> When your order ships, you&apos;ll receive an email with a tracking number.</p>
    <p><strong>Check your address.</strong> Please double-check your shipping address at checkout. If you spot a mistake, email <PolicyEmail /> right away and we&apos;ll update it if your order hasn&apos;t shipped. If a package is returned to us because of an incorrect address, we&apos;ll reship it once you cover the new shipping cost.</p>
    <p><strong>Lost or stolen packages.</strong> If tracking shows your package as delivered but you can&apos;t find it, check with neighbors and your local post office first, then email us within 7 days of the delivery date. We&apos;ll work with the carrier to help find it. Once a carrier marks a package as delivered, we can&apos;t guarantee a replacement, but we&apos;ll always try to make it right.</p>
    <p><strong>Damaged packages or missing items.</strong> If your order arrives damaged or something is missing, email <PolicyEmail /> within 7 days of delivery with your order number and a photo. We&apos;ll send a replacement for the damaged or missing item at no cost to you.</p>
    <p><strong>Questions?</strong> Email <PolicyEmail />.</p>
  </PolicyLayout>
}
