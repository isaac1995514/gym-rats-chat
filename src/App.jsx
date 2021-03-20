/*  eslint-disable */
import React, { useState } from "react";

import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";

/* Components */
import AuthPage from "./component/auth-page/auth-page";
import MainPanel from "./component/main-panel/main-panel";

/* Style */
import "./App.css";

function App() {
  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  return (
    <div className="app-container">{user ? <MainPanel /> : <AuthPage />}</div>
  );
}

export default App;
