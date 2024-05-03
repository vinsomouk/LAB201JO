import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(true);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        const user = userCredential.user;
        if (user.email === 'diakitekhalidou1@gmail.com') {
          navigate("/dashboard")
        } else {
          navigate("/home")
        }
        console.log(user);
      })
     .catch((error) => {
        console.log(error.code, error.message)
      });
  }

  const onResetPassword = (e) => {
    e.preventDefault();
    setResetPassword(true);
    const userEmail = email;
    //...
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
                <a href="#" onClick={onResetPassword}>Forgot password?</a>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;