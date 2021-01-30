import React, { useEffect } from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

/* Components */
import ChatLine from "../chat-line/chat-line";

const ChatRoom = (props) => {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  // Listen to changes
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div className="content">
      {messages &&
        messages.map((msg) => <ChatLine key={msg.id} msg={msg.text} />)}
    </div>
  );
};

export default ChatRoom;
