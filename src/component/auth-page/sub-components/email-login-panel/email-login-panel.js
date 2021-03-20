import React, { useState } from "react";

/* Database */
import firebase from "firebase/app";

/* Component */
import { Button, TextField } from "@material-ui/core";

/* Utils */
import classnames from "classnames";
import validateEmail from "email-validator";

/* Style */
import "./email-login-panel.scss";

export default function EmailLoginPanel() {
  const auth = firebase.auth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const isEmailValid = email === "" || validateEmail.validate(email);

  const isSignInEnabled = email && password && isEmailValid;

  /* Auth Handler */

  const onEmailLogin = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="email-login-panel">
      <div className="input-form-container">
        <form className="input-form" onSubmit={onEmailLogin}>
          <TextField
            label="Email"
            value={email}
            type="email"
            className="input-box email-input"
            error={!isEmailValid}
            helperText={isEmailValid ? " " : "Invalid Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            type="password"
            className="input-box password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classnames(["sign-in-button", "form-button"])}
            variant="contained"
            color="primary"
            onClick={onEmailLogin}
            disabled={!isSignInEnabled}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
