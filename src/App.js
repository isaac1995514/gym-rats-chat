/*  eslint-disable */
import React, { useState } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

/* Components */
import AuthPage from "./component/auth-page/auth-page";
import ChatRoom from "./component/chat-room/chat-room";

/* Style */
import "./App.css";

function App() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [user] = useAuthState(auth);

  const [userInput, setUserInput] = useState("");

  const onSignOut = () => {
    if (firebase.currentUser) {
      const auth = firebase.auth();
      auth.signOut();
    }
  };

  const onSendMessage = async (e) => {
    e.preventDefault();

    const messagesRef = firestore.collection("messages");

    await messagesRef.add({
      text: userInput,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
    });
    setUserInput("");
  };

  return (
    <div className="app-container">
      <header className="app-header">Rats Chat</header>
      <section>{user ? <ChatRoom /> : <AuthPage />}</section>
      <footer className="app-footer">
        <form onSubmit={onSendMessage}>
          <input
            className="chat-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit" className="submit">
            S
          </button>
        </form>
      </footer>
    </div>
  );
}

export default App;
