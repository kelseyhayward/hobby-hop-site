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
      from: "Your Site <no-reply@yourdomain.com>",
      to: "thecuriosityclub.official@gmail.com",
      subject: "New Waitlist Signup",
      html: `<p>New signup: ${email}</p>`
    });

    return res.status(200).json({ message: "Signed up!" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
