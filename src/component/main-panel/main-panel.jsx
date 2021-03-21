import React, { useState } from "react";
import PropTypes from "prop-types";

/* Database */
import firebase from "firebase/app";

/* HOC */
import { provideFirebase } from "../../containers/chat-room";

/* Component */
import { ChatRoom } from "../chat-room";

import { Button } from "@material-ui/core";

import "./main-panel.scss";

const FirebaseChatroom = provideFirebase(ChatRoom);

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
      <div className="header">
        <Button
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
      <div className="room-menu"></div>
      <div className="chat-room">
        <FirebaseChatroom chatroomId="RgWUyIhF2kiDGQuc3aBW" />
      </div>
      <div className="side-bar"></div>
    </div>
  );
}

MainPanel.propTypes = {};

export default MainPanel;
