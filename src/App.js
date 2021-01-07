import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth ";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Firebase Init config
firebase.initializeApp({
  apiKey: "AIzaSyCTAk_zA9Z5VB9hml4Zx_AqSVYf75Y2KBs",
  authDomain: "just-66e19.firebaseapp.com",
  projectId: "just-66e19",
  storageBucket: "just-66e19.appspot.com",
  messagingSenderId: "64383505679",
  appId: "1:64383505679:web:901195b79d48c6a3071a7a",
  measurementId: "G-Y4FRBN6FBY",
});

const auth = firebase.auth();
const firestore = firebse.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
