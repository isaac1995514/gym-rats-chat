import React, { useState } from "react";
import PropTypes from "prop-types";

/* Database */
import firebase from "firebase/app";

/* Component */
import { makeStyles } from "@material-ui/core/styles";
import DirectionsIcon from "@material-ui/icons/Directions";
import { Paper, Divider, IconButton, InputBase } from "@material-ui/core";

/* Style */
import "./chat-room.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ChatRoom = (props) => {
  const { onSubmitMessage, messages = [] } = props;

  const classes = useStyles();

  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmitMessage(text);
      setText("");
    }
  };

  return (
    <div className="chat-room-wrapper">
      <div className="message-list-wrapper">
        {messages.map((msg) => (
          <div>{msg.text}</div>
        ))}
      </div>
      <div className="input-box">
        <Paper component="form" className={classes.root}>
          <InputBase
            value={text}
            className={classes.input}
            onKeyDown={handleEnterPress}
            onChange={handleInputChange}
          />
        </Paper>
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  onSubmitMessage: PropTypes.func,
};

export default ChatRoom;
