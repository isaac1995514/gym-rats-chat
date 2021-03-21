import React, { useContext } from "react";
import PropTypes from "prop-types";

/* Database */
import firebase from "firebase/app";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

/* Context */
import { UserInfoContext } from "../../context";

/**
 * Chatroom container that listens to the updates in the firebase server
 * and populat the chatroom with the messages
 */
const FirebaseDataProvider = (ChatRoom) => {
  const FirebaseChatroomContainer = (props) => {
    FirebaseChatroomContainer.propTypes = {
      chatroomId: PropTypes.string.isRequired,
    };

    const { chatroomId } = props;

    const userInfo = useContext(UserInfoContext);

    const firestore = firebase.firestore();
    const chatroomRef = firestore.collection("chatrooms").doc(chatroomId);
    const messages = chatroomRef.collection("messages");
    const query = messages.orderBy("createdAt").limit(25);

    const [values] = useCollectionData(query);

    const handleSubmitMessage = async (text) => {
      messages
        .add({
          text: text,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          userId: userInfo.uid,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((e) => {
          console.error(e);
        });
    };

    return <ChatRoom messages={values} onSubmitMessage={handleSubmitMessage} />;
  };

  return FirebaseChatroomContainer;
};

export default FirebaseDataProvider;
