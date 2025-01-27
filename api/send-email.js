const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { feedback, user_email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: "Feedback Received",
      html: `
        <html>
          <body>
            <h2>Thank you for your feedback!</h2>
            <p>We appreciate your message:</p>
            <blockquote>"${feedback}"</blockquote>
            <p>Best regards,</p>
            <p>The Team</p>
          </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
