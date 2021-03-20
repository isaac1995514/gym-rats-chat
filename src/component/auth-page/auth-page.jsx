import React, { useState, useEffect } from "react";

/* Assets */
import EmailIcon from "../../assets/icons/email.svg";

/* Database */
import firebase from "firebase/app";

/* Components */
import { SignUpDialog } from "./sub-components/sign-up-dialog";
import { EmailLoginPanel } from "./sub-components/email-login-panel";
import { LoginIconPanel } from "./sub-components/login-icon-panel";

/* Utils */
import classnames from "classnames";

/* Style */
import "./auth-page.scss";

const AuthPage = (props) => {
  const auth = firebase.auth();

  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);

  /* UI Hanlder */
  const openSingupDialog = () => {
    setIsSignupDialogOpen(true);
  };

  const closeSignupDialog = () => {
    setIsSignupDialogOpen(false);
  };

  const loginPageExpand = [
    { name: "email-signup", src: EmailIcon, action: openSingupDialog },
  ];

  return (
    <>
      <div className="auth-page-container">
        <div className="function-panel">
          <EmailLoginPanel />
          <LoginIconPanel expandFeatureList={loginPageExpand} />
        </div>
      </div>
      <SignUpDialog
        isDialogOpen={isSignupDialogOpen}
        closeSignupDialog={closeSignupDialog}
      />
    </>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
