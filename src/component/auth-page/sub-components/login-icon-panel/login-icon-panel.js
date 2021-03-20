import React from "react";
import PropTypes from "prop-types";

/* Database */
import firebase from "firebase/app";

/* Assets */
import GooglePlus from "../../../../assets/icons/google-plus.svg";

/* Utils */
import classnames from "classnames";

/* Style */
import "./login-icon-panel.scss";

export default function LoginIconPanel(props) {
  const { expandFeatureList = [] } = props;

  const auth = firebase.auth();

  const onGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const loginFeatureList = [
    ...expandFeatureList,
    { name: "google", src: GooglePlus, action: onGoogleLogin },
  ];

  const createLoginButton = ({ name, src, action }) => (
    <div
      key={`${name}-login-icon-container`}
      className={classnames(
        "third-party-login-container",
        "icon-button-wrapper"
      )}
    >
      <img
        role="button"
        onClick={action}
        className={classnames("login-icon-button", `${name}-icon`)}
        src={src}
        alt={`Login in with ${name}`}
      />
    </div>
  );

  return (
    <div className={classnames("login-icons-panel-wrapper")}>
      {loginFeatureList.map((login) => createLoginButton(login))}
    </div>
  );
}

LoginIconPanel.propTypes = {
  expandFeatureList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      src: PropTypes.string,
      action: PropTypes.func,
    })
  ),
};
