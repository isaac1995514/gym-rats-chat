/*  eslint-disable */
import React, { useState } from "react";

/* Database */
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

/* Context */
import { UserInfoContext } from "./context";

/* Components */
import AuthPage from "./component/auth-page/auth-page";
import MainPanel from "./component/main-panel/main-panel";

/* Style */
import "./App.css";

function App() {
  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  return (
    <div className="app-container">
      {user ? (
        <UserInfoContext.Provider value={user}>
          <MainPanel />
        </UserInfoContext.Provider>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
