import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignInWithGoogleButton = ({ handleSignInWithGoogle }) => {
  const googleColor = "#EA4335"; // Google's color code

  const buttonStyles = {
    backgroundColor: googleColor,
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    marginTop: "50px",
  };

  const iconStyles = {
    marginRight: "10px",
  };

  return (
    <button style={buttonStyles} onClick={handleSignInWithGoogle}>
      <FaGoogle style={iconStyles} />
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogleButton;
