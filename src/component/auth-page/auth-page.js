import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import firebase from "firebase/app";

const AuthPage = (props) => {
  const auth = firebase.auth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <section>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign in
      </Button>
    </section>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
