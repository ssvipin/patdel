import React, { useState } from "react";
import { database } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import SignInWithGithubButton from "./SignInWithGithubButton";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoggedIn(true);
      signInWithEmailAndPassword(database, username, password)
        .then((data) => {
          window.location.href = "/";
          navigate("/");

          console.log("auth data", data);
        })
        .catch((e) => {
          console.log("error=>", e);
        });
    } else {
      alert("Please enter username and password.");
    }
  };
  const handleSignInWithGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithRedirect(database, provider);
      const user = result.user;
      window.location.href = "/";
      navigate("/");

      console.log("Successfully signed in with Google:", user);
      // You can now use the 'user' object for further operations
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
    e.preventDefault();
  };
  const handleSignInWithGithub = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithRedirect(database, provider);
      const user = result.user;
      navigate("/");

      console.log("Successfully signed in with GitHub:", user);
      // You can now use the 'user' object for further operations
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "12px 16px",
        // height: "50%",
        marginBottom: "-48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f39c12",
      }}
    >
      <div
        style={{
          // border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          background: "#f2f2f2",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            // border: "1px solid red",
            padding: "8px",
          }}
        >
          <h2
            style={{
              //   border: "1px solid red",
              padding: "4px",
              textAlign: "center",
            }}
          >
            Welcome back Foodiee
          </h2>
        </div>
        <form
          onSubmit={handleLogin}
          style={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            marginTop: "30px",
          }}
        >
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "362px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
              }}
            />
          </label>
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "362px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
              }}
            />
          </label>
          <SignInWithGoogleButton
            handleSignInWithGoogle={handleSignInWithGoogle}
          />
          <SignInWithGithubButton
            handleSignInWithGithub={handleSignInWithGithub}
          />
          <button
            type="submit"
            style={{
              //   border: "1px solid red",
              //   padding: "4px",
              //   display: "flex",
              // width: "362px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              height: "34px",
            }}
          >
            Login
          </button>
          <div
            style={{
              //   border: "1px solid red",
              marginTop: "20px",
              padding: "8px",
            }}
          >
            <p
              style={{
                // border: "1px solid red",
                padding: "4px",
                fontSize: "12px",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{
                  textDecoration: "none",
                  margin: "0 3px",
                }}
              >
                Signup
              </a>
              here!
            </p>
          </div>
        </form>
        {loggedIn && <p>Login successful!</p>}
      </div>
    </div>
  );
};

export default Login;
