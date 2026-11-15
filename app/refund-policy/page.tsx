import { PolicyEmail, PolicyLayout } from "@/components/policy-layout"

export default function RefundPolicyPage() {
  return <PolicyLayout title="Refund & Return Policy">
    <p>We want you to love every kit. This policy covers cancellations, returns, and refunds.</p>
    <p><strong>Cancelling an order.</strong> You can cancel an order for a full refund any time before it ships. Email <PolicyEmail /> as soon as possible. Once an order has shipped, the return terms below apply.</p>
    <p><strong>Unopened items: 30-day returns.</strong> You can return any unopened kit or canvas in its original packaging within 30 days of delivery for a refund of the product price. Email <PolicyEmail /> with your order number to start a return, and we&apos;ll send you our return address. Please don&apos;t mail a return without contacting us first.</p>
    <p><strong>Opened or used items.</strong> Our canvases are hand-painted and our kits contain thread and needles that can&apos;t be resold once opened, so we can&apos;t accept returns of opened items. If you&apos;re unhappy with an opened item for any reason, email us anyway. We read every message and will do what we can.</p>
    <p><strong>Damaged, defective, or wrong items.</strong> If your order arrives damaged, defective, missing pieces, or isn&apos;t what you ordered, email TheHobbyHoppersClub@gmail.com within 7 days of delivery with your order number and a photo.</p>
    <p><strong>Return shipping.</strong> For returns of unopened items, you pay to ship them back to us, and original shipping charges are not refunded. If the return is because of our mistake, we cover all shipping costs.</p>
    <p><strong>How refunds are issued.</strong> Once we receive and check your return, we&apos;ll email you to confirm. Refunds go back to your original payment method, including any sales tax paid on the refunded items. Depending on your bank, refunds can take 5–10 business days to appear.</p>
    <p><strong>The Hobby Hoppers Club.</strong> Our monthly subscription isn&apos;t open yet. When it launches, its cancellation and refund terms will be added here and shown to you before you sign up.</p>
    <p><strong>Questions?</strong> Email <PolicyEmail />.</p>
  </PolicyLayout>
}
