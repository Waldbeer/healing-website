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
    e.preventDefault(); // Verhindern Sie das Standardverhalten des Formulars
    if (emailValid) {
      // Hier könnten Sie den API-Aufruf einfügen, um die E-Mail zu senden, z.B.:
      try {
        // Simulieren Sie einen erfolgreichen API-Aufruf oder verwenden Sie Ihre tatsächliche Sendefunktion
        // const response = await sendEmailFunction({ email });

        setEmailSent(true);
        setEmail(''); // Leert das E-Mail-Feld
        setEmailValid(false); // Setzt den Validierungsstatus zurück
      } catch (error) {
        setError(true); // Setzt den Fehlerzustand, falls beim Senden der E-Mail ein Fehler auftritt
        console.error("Error sending email:", error);
      }
    } else {
      setError(true); // Wenn die E-Mail ungültig ist, setzen Sie einen Fehlerzustand
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
            Beim Senden der E-Mail ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;





