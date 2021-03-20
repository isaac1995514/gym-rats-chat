import React, { useState } from "react";
import PropTypes from "prop-types";

/* Database */
import firebase from "firebase/app";

import { Button } from "@material-ui/core";

import "./main-panel.scss";

function MainPanel(props) {
  const auth = firebase.auth();

  const [userInput, setUserInput] = useState("");

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
    <div className="main-panel-container">
      <Button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </Button>
      <div className="header"></div>
      <div className="room-menu"></div>
      <div className="chat-room"></div>
    </div>
  );
}

MainPanel.propTypes = {};

export default MainPanel;
