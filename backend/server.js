const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint do obsługi formularza
app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  // Konfiguracja transportera nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // lub inny serwis
    auth: {
      user: 'twoj_email@gmail.com',
      pass: 'twoje_haslo'
    }
  });

  const mailOptions = {
    from: email,
    to: 'twoj_email@gmail.com',
    subject: `Wiadomość od ${email}: ${subject}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Wystąpił błąd podczas wysyłania wiadomości.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Wiadomość została wysłana pomyślnie.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
