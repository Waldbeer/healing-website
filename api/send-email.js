const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { email } = req.body; // The email from the request

  // Gmail account credentials used to send email
  const smtpEmail = process.env.SMTP_EMAIL; // your Gmail account
  const smtpPassword = process.env.SMTP_PASSWORD; // your Gmail password

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: smtpEmail,
    to: 'ne7la@t-online.de', // your destination email address
    subject: 'Neue Kontaktanfrage',
    text: `Ein potentieller Kunde mit der E-Mail-Adresse ${email} wartet auf ein zeitnahes Angebot.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
};


