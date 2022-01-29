import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp, auth } from "../firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => setError(error.message));
  };
  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }

    //something here
  };
  return (
    <div className="login">
      {error && <Alert variant="danger">{error}</Alert>}
      <Link to="/">
        <div className="login__image">
          <img src="amazonlogin.png" alt="login_logo" />
        </div>
      </Link>

      <div className="login__form">
        <h1>Sign-In</h1>
        <div className="login__forminput">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__forminput">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login__btn" onClick={signIn}>
          SignIn
        </button>
        <p>
          By siging in, you agree to the AMAZON Condition of Use and Sale.
          Please see our Privacy notice, our Cookies notice and our internet
          based Ads notice
        </p>
        <button type="submit" className="login__createbtn" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
