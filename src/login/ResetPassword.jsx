import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const userEmail = email;
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        navigate('/login', { replace: true });
        alert('Un email de réinitialisation de mot de passe a été envoyé à votre adresse email.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Une erreur est survenue lors de l\'envoi de l\'email de réinitialisation de mot de passe.');
      });
  }

  return (
    <>
      <main>
        <section>
          <div>
            <p> Réinitialisation de mot de passe </p>
            <form onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="email-address">
                  Adresse email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                >
                  Envoyer l'email de réinitialisation
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResetPassword;