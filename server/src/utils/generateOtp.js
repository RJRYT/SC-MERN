import nodemailer from "nodemailer";

let transporter;

try {
  // Create transporter
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_APP_PASS,
    },
    logger: true, // Useful for debugging
    debug: false, // Disable debug logs in production
  });

  // Verify transporter connection
  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP Configuration Error:", error.message);
    } else {
      console.log("SMTP Transporter is ready!");
    }
  });
} catch (error) {
  console.error("Error creating transporter:", error.message);
}

// Function to send email
export const sendEmail = async (to, subject, html) => {
  if (!transporter) {
    throw new Error("SMTP transporter is not initialized.");
  }

  try {
    const info = await transporter.sendMail({
      from: `"Support Team" <${process.env.SMPT_MAIL}>`, // Sender name
      to,
      subject,
      html,
    });
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Email sending failed.");
  }
};

// Function to generate OTP
export const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// Function to generate OTP email template
export const generateOtpEmail = (otp) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
      <h2 style="text-align: center; color: #4CAF50;">Welcome to Our Service</h2>
      <p>Dear User,</p>
      <p>Your OTP is <strong style="font-size: 1.2em; color: #4CAF50;">${otp}</strong>.</p>
      <p>This OTP is valid for 10 minutes. If you didn’t request this, please ignore this email.</p>
      <p style="margin-top: 20px;">Best Regards,<br />The Support Team</p>
    </div>
  `;
};

// Example Usage
const otp = generateOtp(); // Generate OTP
const emailContent = generateOtpEmail(otp); // Generate email template with OTP

sendEmail("user@example.com", "Your OTP Code", emailContent)
  .then(() => console.log("Email sent successfully with OTP:", otp))
  .catch((err) => console.error("Failed to send OTP email:", err.message));
