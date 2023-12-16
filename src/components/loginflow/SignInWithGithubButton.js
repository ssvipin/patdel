import React from "react";
import { FaGithub } from "react-icons/fa";

const SignInWithGithubButton = ({ handleSignInWithGithub }) => {
  const githubColor = "#211F1F"; // GitHub's color code

  const buttonStyles = {
    backgroundColor: githubColor,
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    marginTop: "20px",
  };

  const iconStyles = {
    marginRight: "10px",
  };

  return (
    <button style={buttonStyles} onClick={handleSignInWithGithub}>
      <FaGithub style={iconStyles} />
      Sign in with GitHub
    </button>
  );
};

export default SignInWithGithubButton;
