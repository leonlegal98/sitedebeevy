import React, {useState} from 'react';
import axios from 'axios';
import validator from 'validator';
import Footer from './Footer'
import '../Styles/Contact.css'

function ContactForm() {
    const [formData,
        setFormData] = useState({firstName: '', lastName: '', email: '', subject: '', message: ''});
    const [isSubmitting,
        setIsSubmitting] = useState(false);
    const [isSuccess,
        setIsSuccess] = useState(false);
    const [errorMessage,
        setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Vérifiez que tous les champs sont remplis
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }

        // Vérifiez que l'e-mail est valide
        if (!validator.isEmail(formData.email)) {
            setErrorMessage('Veuillez entrer une adresse e-mail valide.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post('https://formspree.io/f/xaygbpab', formData);

            if (response.status === 200) {
                setIsSuccess(true);
                setFormData({firstName: '', lastName: '', email: '', subject: '', message: ''});
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
        <div className='contactbio'>

            <div className='homecontact'>
                <div className='contactimage'>
                    <img className='imagebeevyfleur' src='/images/contact.png'/>
                </div>
                {isSuccess
                    ? (
                        <p>Message envoyé avec succès !</p>
                    )
                    : (

                        <form onSubmit={handleSubmit}>
                            {errorMessage && <p className="error">{errorMessage}</p>}
                            <div className='texteform'>
                                <h1 className='contacttitre'>Des questions ?</h1>
                                <p>Contactez-moi :</p>
                            </div>

                            <div className='nomcontact'>
                              <div>
                                <label>Prénom</label>
                                </div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}/>
                           <div>
                           <label>Nom</label>
                                </div>
                                
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}/>
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Objet</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Votre Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange}/>
                            </div>
                            <button className='buttoncontact' type="submit" disabled={isSubmitting}>
                                {isSubmitting
                                    ? 'Envoi en cours...'
                                    : 'Envoyer'}
                            </button>
                        </form>
                    )}

            </div>
            <Footer/>
        </div>
    );
}

export default ContactForm;
