const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, subject, message } = req.body;

  // Configuration du transporteur de messagerie
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'helenelegal8@gmail.com', // Remplacez par votre adresse e-mail
      pass: 'Leonidas7', // Remplacez par votre mot de passe
    },
  });

  // Contenu de l'e-mail
  const mailOptions = {
    from: 'helenelegal8@gmail.com',
    to: 'helenelegal8@gmail.com',
    subject: subject,
    text: `Prénom: ${firstName}\nNom: ${lastName}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.send('E-mail envoyé avec succès');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur backend écoutant sur le port ${port}`);
});
