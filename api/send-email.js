const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { feedback, user_email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Ambil dari .env
      pass: process.env.EMAIL_PASS, // Ambil dari .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user_email,
    subject: "Feedback Received",
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2c3e50;">Thank you for your feedback!</h2>
            <p style="font-size: 16px;">Hi there,</p>
            <p style="font-size: 16px;">We appreciate your feedback and have received the following message:</p>
            <blockquote style="background-color: #f1f1f1; border-left: 4px solid #2c3e50; padding: 10px 20px; font-style: italic;">
              "${feedback}"
            </blockquote>
            <p style="font-size: 16px;">We will review it and get back to you soon. If you have more feedback, feel free to reach out again.</p>
            <p style="font-size: 16px;">Best regards,<br />The Team</p>
            <hr />
            <footer style="font-size: 12px; text-align: center; color: #aaa;">
              <p>If you did not send this feedback, please disregard this email.</p>
              <p>&copy; ${new Date().getFullYear()} Bagas Gilang Ramadhan</p>
            </footer>
          </div>
        </body>
      </html>
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
