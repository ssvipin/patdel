// Signup.js

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { database } from "../FirebaseConfig";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && email && password && password === confirmPassword) {
      createUserWithEmailAndPassword(database, email, password)
        .then((userCredential) => {
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: photoURL,
          })
            .then((data) => {
              console.log(data);
            })
            .catch((e) => {
              console.log(e);
            });
          setSignedUp(true);
          console.log("auth data", userCredential);
        })
        .catch((e) => {
          console.log("error=>", e);
        });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "12px 16px",
        marginBottom: "-48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height: "50%",
        background: "#f39c12",
      }}
    >
      <div
        style={{
          // border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          width: "auto",
          background: "#fff",
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
            Welcome to Kitchen Kings
          </h2>
        </div>
        <form
          onSubmit={handleSignup}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            // width: "392px",
            // border: "1px solid red",
            padding: "4px",
          }}
        >
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              alignItems: "center",
              //   height: "65px",
            }}
            key={"username"}
          >
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
                marginLeft: "8px",
              }}
            />
          </label>
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              //   height: "65px",
              alignItems: "center",
            }}
            key={"email"}
          >
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
                marginLeft: "8px",
              }}
            />
          </label>
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              //   height: "65px",
              alignItems: "center",
            }}
          >
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
                marginLeft: "8px",
              }}
            />
          </label>
          <label
            style={{
              //   border: "1px solid red",
              //   background: "red",
              padding: "4px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              //   height: "65px",
              alignItems: "center",
            }}
          >
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
                marginLeft: "8px",
              }}
            />
          </label>
          <label
            style={{
              //   border: "1px solid red",
              padding: "4px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              alignItems: "center",
              //   height: "65px",
            }}
            key={"username"}
          >
            photoURL:
            <input
              type="text"
              value={username}
              onChange={(e) => setPhotoURL(e.target.value)}
              style={{
                height: "34px",
                width: "242px",
                marginLeft: "8px",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              //   border: "1px solid red",
              //   padding: "4px",
              //   display: "flex",
              //   width: "392px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "50px",
              height: "34px",
            }}
          >
            Sign Up
          </button>
          <div
            style={{
              // border: "1px solid red",
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
              Already have an account?{" "}
              <a
                href="/signin"
                style={{
                  textDecoration: "none",
                  margin: "0 3px",
                }}
              >
                Signin
              </a>
              here!
            </p>
          </div>
        </form>
        {signedUp && <p>Sign up successful! Please log in.</p>}
      </div>
    </div>
  );
};

export default Signup;
