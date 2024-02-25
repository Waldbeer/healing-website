import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    setEmailValid(validateEmail(currentEmail));
    if (validateEmail(currentEmail)) {
      setError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitPressed(true);
    setIsLoading(true); // Set loading to true

    if (emailValid) {
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('_subject', 'Neue Kontaktanfrage');
        formData.append('message', `Ein potentieller Kunde mit der E-Mail-Adresse ${email} wartet auf ein zeitnahes Angebot.`);

        const response = await fetch('https://formsubmit.co/emkoemail@gmail.com', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setEmailSent(true);
          setEmail('');
          setEmailValid(true);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
      setIsLoading(false); // Reset loading state
      setSubmitPressed(false);
    } else {
      setError(true);
      setIsLoading(false); // Reset loading state if email is invalid
    }
  };

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
              disabled={isLoading}
            >
              {isLoading ? 'Senden...' : 'Senden'}
            </button>
          </form>
        )}
        {error && (
          <div style={{color: '#dc3545', fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>
            {emailValid ? 'Fehler beim Senden der Email. Bitte versuchen Sie es erneut.' : 'Email nicht gültig'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

