import React, { useState } from 'react';
import emailIcon from '../assets/emailIcon.svg';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (validateEmail(currentEmail)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid) {
      console.log(email); // Simulating email sending
      setEmailSent(true);
      setEmail(''); // Clearing the input field after sending
      setEmailValid(false); // Reset the validation state
    }
  };

  const createEmailTemplate = (customerEmail) => {
    return `
      Sehr geehrter Herr/Frau ${customerEmail},
  
      Herzlichen Dank für Ihr Interesse an unseren Heilungsangeboten.
  
      Es freut uns, Ihnen folgende Pakete für den Beginn Ihrer Heilungsreise anbieten zu dürfen:
  
      1. Basis-Paket: Unsere Ganzkörperreinigung, eine 30-minütige Sitzung, die für einen Preis von 49€ verfügbar ist.
      
      2. Premium-Paket: Dies beinhaltet unsere Ganzkörperreinigung sowie eine energetische Heilbehandlung. Dieses umfassende Angebot steht Ihnen für 79€ zur Verfügung.
  
      Bitte senden Sie uns Ihre endgültige Auswahl an nelli@naturenergieheilung.com . Nach Erhalt Ihrer Auswahl werden wir Ihnen unsere Bankverbindung für die Zahlung zukommen lassen sowie drei Terminvorschläge unterbreiten, aus denen Sie bequem wählen können.
  
      Wir freuen uns darauf, Sie auf Ihrem Weg der Heilung zu begleiten.
  
      Mit freundlichen Grüßen,
  
      Nelli Schorn
      Natur und Energieheilung
    `;
  };
  
  

  const inputClassName = emailValid ? 'border-green-500' : 'border-red-500';

  return (
    <div className="contact-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', background: '#f0f0f0', height: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={emailIcon} alt="Email" width="32" style={{ marginRight: '10px' }} />

        {emailSent ? (
          <div style={{color: '#28a745', fontWeight: 'bold',fontSize: '20px' }}>E-Mail erfolgreich gesendet!</div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ihre E-Mail-Adresse"
              className={`form-input text-lg rounded p-2 ${inputClassName}`}
              style={{ border: '2px solid', marginRight: '10px' }} // The border color is dynamically set by inputClassName
              required
              disabled={emailSent}
            />
            <button
              type="submit"
              className="btn btn-primary text-lg mr-9"
              disabled={emailSent || !emailValid}
              style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', textTransform: 'uppercase' }}
            >
              Senden
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;


