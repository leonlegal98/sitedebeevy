// if (typeof global === 'undefined') {
//     global = window;
//   }
//   if (!global.stream) {
//     global.stream = require('stream-browserify');
//   }
  
//   if (typeof global === 'undefined') {
//     global = window;
//   }
//   if (!global.crypto) {
//     global.crypto = require('crypto-browserify');
//   }
// const nodemailer = require('nodemailer');


// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'votre_email@gmail.com',
//     pass: 'votre_mot_de_passe',
//   },
// });

// const sendEmail = (formData) => {
//   const mailOptions = {
//     from: formData.email,
//     to: 'destinataire@example.com',
//     subject: formData.subject,
//     text: formData.message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Email envoyé : ' + info.response);
//     }
//   });
// };

// export default sendEmail;
