import {
  config
} from 'dotenv';
config();
import nodemailer from "nodemailer";
import {
  IncomingForm
} from "formidable";

export default async (req, res) => {
  // This promise-based approach handles the async nature of the parsing
  const formData = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve(fields);
    });
  });

  const {
    name,
    number,
    date
  } = formData;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust this to be more restrictive if needed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "paolo.yasay@gmail.com",
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "paolo.yasay@gmail.com",
    to: "paolo_yasay@yahoo.com",
    subject: `NEW APPOINTMENT HAS BEEN MADE`,
    text: `GREETINGS! You have a new appointment from ${name} with contact number ${number} and scheduled to ${date}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({
      success: true
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
};