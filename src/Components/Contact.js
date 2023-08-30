
import Footer from './Footer';
import React, { useState } from 'react';
import sendEmail from './sendEmail';



function Contact() {

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Ici, vous pouvez appeler la fonction pour envoyer l'email avec les données du formulaire
  //   sendEmail(formData);
  // };
  
  return (
    <div>
     {/* <div className='contactform'>
     <h1>Contactez-nous</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Objet</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
        </div>        */} 




     <Footer/>
    </div>
  );
}

export default Contact;
