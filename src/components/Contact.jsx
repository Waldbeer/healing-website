import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false); // Neuer Zustand für Fehlerbehandlung

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (validateEmail(currentEmail)) {
      setEmailValid(true);
      setError(false); // Fehlerzustand zurücksetzen, wenn die E-Mail jetzt gültig ist
    } else {
      setEmailValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default behavior of the form
  
    if (emailValid) {
      try {
        // Prepare the data to send
        const emailData = { email }; // assuming server accepts { email: string }
  
        // Send a POST request to your server endpoint responsible for sending the email
        const response = await fetch('https://natur-energieheilung.com/api/sendemail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData), // body data type must match "Content-Type" header
        });
  
        const responseData = await response.json(); // Assuming server responds with json
  
        if (response.ok) {
          setEmailSent(true);
          setEmail(''); // Clears the email field
          setEmailValid(false); // Resets the validation status
        } else {
          setError(true); // Sets error state if there's a problem with the operation
          console.error('Server responded with an error', responseData);
        }
      } catch (error) {
        setError(true); // Sets the error state if sending the email fails
        console.error("Error sending email:", error);
      }
    } else {
      setError(true); // If the email is invalid, set an error state
    }
  };
  

  // Form input classes
  const inputClassName = emailValid ? 'border-green-500' : 'border-red-500';

  return (
    <div className="contact-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', background: '#f0f0f0' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {emailSent ? (
          <div style={{color: '#28a745', fontWeight: 'bold', fontSize: '20px' }}>E-Mail erfolgreich gesendet!</div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ihre E-Mail-Adresse"
              className={`form-input text-lg rounded p-2 ${inputClassName}`}
              style={{ border: '2px solid', marginRight: '10px' }}
              required
            />
            <button
              type="submit"
              className="btn btn-primary text-lg"
              style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', textTransform: 'uppercase' }}
              disabled={!emailValid} // Button ist deaktiviert, wenn die E-Mail nicht gültig ist
            >
              Senden
            </button>
          </form>
        )}
        {error && ( // Wenn ein Fehler auftritt, zeigen Sie eine Fehlermeldung an
          <div style={{color: '#dc3545', fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>
            Fehler beim Senden der Email. Bitte versuchen Sie es erneut.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;





