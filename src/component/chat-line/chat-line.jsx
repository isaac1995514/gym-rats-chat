import React from "react";
import PropTypes from "prop-types";

const ChatLine = (props) => {
  const { msg } = props;

  return <p>{msg}</p>;
};

ChatLine.propTypes = {};

export default ChatLine;
