import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
};

// Helper function to generate email content
const generateEmailContent = (data) => {
  // Construct plain text version
  const text = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val}\n`),
    ""
  );

  // Construct HTML version
  const html = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 style="margin-bottom:5px;">${CONTACT_MESSAGE_FIELDS[key]}</h3><p style="margin-top:0;">${val}</p>`);
  }, "");

  return {
    text,
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Message</title>
      </head>
      <body>
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Contact Message</h2>
          <div>${html}</div>
        </div>
      </body>
    </html>`,
  };
};

// API route handler
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // Validate required fields
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      const emailContent = generateEmailContent(data); // Generate email body content

      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject, // Set subject
        text: emailContent.text, // Add text version of content
        html: emailContent.html, // Add HTML version of content
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
