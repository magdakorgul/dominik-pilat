require('dotenv').config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);


const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint do obsługi formularza
app.post('/send-email', async (req, res) => {
    try {
      const { email, subject, message } = req.body;
  
      // Konfiguracja transportera
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Twój adres email
          pass: process.env.EMAIL_PASS,  // Wygenerowane hasło aplikacji
          logger: true,
          debug: true
        }
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER, // Must be your authenticated Gmail address
        to: process.env.EMAIL_USER, // Sending to your own email
        subject: subject,
        text: `You have received a new message from ${email}:\n\n${message}`,
        replyTo: email, // This sets the user's email as the reply-to address
      };
  
      // Wysyłanie maila
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
  
      // Zwróć odpowiedź sukcesu
      res.status(200).json({ success: true, message: 'Email was sent successfully!' });
    } catch (error) {
      console.error('Error while sending email', error);
  
      // Zwróć odpowiedź błędu
      res.status(500).json({ success: false, message: 'There was an error while sending email', error: error.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
