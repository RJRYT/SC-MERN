import nodemailer from "nodemailer";

let transporter;
try {
  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_APP_PASS,
    },
  });

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

export const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMPT_MAIL,
      to,
      subject,
      html,
    });
    console.log("to==>", to);

    console.log("subject==>", subject);

    console.log("html==>", html);

    console.log("Email sent successfully: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed.");
  }
};

export const generateOtp = () => Math.floor(1000 + Math.random() * 9000);

export const generateOtpEmail = (otp) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
    <h2 style="text-align: center; color: #4CAF50;">Welcome to Our Service</h2>
    <p>Dear User,</p>
    <p>Your OTP is <strong style="font-size: 1.2em; color: #4CAF50;">${otp}</strong>.</p>
    <p>This OTP is valid for 10 minutes. If you didn’t request this, please ignore this email.</p>
    <p style="margin-top: 20px;">Best Regards,<br />The Support Team</p>
  </div>
`;
