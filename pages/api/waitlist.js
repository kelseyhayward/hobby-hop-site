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
    await resend.emails.send({
      from: "The Hobby Hop <hello@thehobbyhop.com>",
      to: "thehobbyhoppersclub@gmail.com",
      subject: "New Waitlist Signup",
      html: `<p><strong>${email}</strong> joined your waitlist.</p>`,
    });

    await resend.emails.send({
  from: "The Hobby Hop <hello@thehobbyhop.com>",
  to: email,
  replyTo: "thehobbyhoppersclub@gmail.com",
  subject: "Welcome to The Hobby Hop 🧵📚🍞",
  html: `
    <h2>Welcome to The Hobby Hop!</h2>

    <p>You're officially on the waitlist.</p>

    <p>We're building a subscription experience that helps people discover new hobbies without the overwhelm of figuring out where to start.</p>

    <p>As a waitlist member, you'll be the first to hear about:</p>

    <ul>
      <li>Launch updates</li>
      <li>Early access opportunities</li>
      <li>New hobby reveals</li>
      <li>Founding member perks</li>
    </ul>

    <p>Thanks for joining us at the very beginning.</p>

    <p>— Kelsey<br/>Founder, The Hobby Hop</p>
  `,
});

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Email failed:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
