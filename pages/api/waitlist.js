import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // 1. Email notification to YOU
    await resend.emails.send({
      from: "The Hobby Hop <onboarding@resend.dev>",
      to: "thehobbyhoppersclub@gmail.com",
      reply_to: email,
      subject: "New Waitlist Signup",
      html: `<p><strong>${email}</strong> joined your waitlist.</p>`,
    });

    // 2. Welcome email to THEM
    await resend.emails.send({
      from: "The Hobby Hop <onboarding@resend.dev>",
      to: email,
      reply_to: "thehobbyhoppersclub@gmail.com",
      subject: "Welcome to The Hobby Hop 🧵📚🍞",
      html: `
        <p>Hi there,</p>

        <p>You're officially on the waitlist for <strong>The Hobby Hop</strong>!</p>

        <p>We're building a subscription experience that makes it easy to discover new hobbies without the overwhelm of figuring out where to start.</p>

        <p>Whether you're curious about needlepoint, reading, sourdough, watercolor, or something completely new, we're excited to help you find your next favorite hobby.</p>

        <p>As a waitlist member, you'll be the first to hear about:</p>

        <ul>
          <li>Launch updates</li>
          <li>Early access opportunities</li>
          <li>New hobby reveals</li>
          <li>Founding member perks</li>
        </ul>

        <p>Thanks for joining us at the very beginning.</p>

        <p>Talk soon,<br/>
        Kelsey<br/>
        Founder, The Hobby Hop</p>
      `,
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
