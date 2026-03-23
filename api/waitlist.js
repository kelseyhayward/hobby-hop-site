export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    console.log("New waitlist signup:", email);

    return res.status(200).json({ message: 'Success' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}
