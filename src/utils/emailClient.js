import emailjs from "emailjs-com";

/* EDIT HERE: supply your EmailJS credentials */
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default async function sendEmail({ name, email, message }) {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { from_name: name, reply_to: email, message },
      PUBLIC_KEY
    );
    return { ok: true, msg: "Message sent!" };
  } catch (err) {
    console.error("Email send error:", err);
    return { ok: false, msg: "Error sending message." };
  }
}
