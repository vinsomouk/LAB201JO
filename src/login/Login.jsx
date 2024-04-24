import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(true);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Check if user is an admin
        if (user.email === 'diakitekhalidou1@gmail.com') {
          navigate("/dashboard")
        } else {
          navigate("/home")
        }
        console.log(user);
      })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  const onResetPassword = (e) => {
    e.preventDefault();
    setResetPassword(true);
    const userEmail = email;
    getAuth()
     .generatePasswordResetLink(userEmail, actionCodeSettings)
     .then((link) => {
        // Construct password reset email template, embed the link and send
        // using custom SMTP server.
        return sendCustomPasswordResetEmail(userEmail, displayName, link);
      })
     .catch((error) => {
        // Some error occurred.
      });
  }
  
  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>
            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
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
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  onClick={onLogin}
                >
                  Login
                </button>
              </div>

              <p>
    <a href="/reset" onClick={onResetPassword}>
      Forgot password?
    </a>
  </p>
            </form>

           
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;