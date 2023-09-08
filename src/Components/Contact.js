import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://formspree.io/f/mjvqrzkq',
        formData
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          subject: '',
          message: '',
        });
      } else {
        setErrorMessage('Erreur lors de l\'envoi de l\'e-mail.');
      }
    } catch (error) {
      console.error('Erreur lors de la demande POST:', error);
      setErrorMessage('Erreur lors de l\'envoi de l\'e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSuccess ? (
        <p>Message envoyé avec succès !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div>
            <label>Prénom</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nom</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Objet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
