import React from "react";
import PropTypes from "prop-types";

function HeaderToolbar(props) {
  const onSignOut = () => {
    if (firebase.currentUser) {
      const auth = firebase.auth();
      auth.signOut();
    }
  };

  return <div></div>;
}

HeaderToolbar.propTypes = {};

export default HeaderToolbar;
