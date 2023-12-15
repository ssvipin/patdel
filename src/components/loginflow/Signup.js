// Signup.js

import React, { useState } from "react";
// import './Signup.css'; // Import your CSS file for styling if needed

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Here, you can implement your signup logic (e.g., create a new user)
    // For simplicity, this example just sets signedUp to true if all fields are not empty and passwords match
    if (username && email && password && password === confirmPassword) {
      setSignedUp(true);
      // You might want to redirect the user to a login page upon successful signup
      // You can use React Router's history or redirect accordingly
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
      }}
    >
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
          width: "auto",
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
            Sign Up
          </h2>
        </div>
        <form
          onSubmit={handleSignup}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
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
              //   height: "65px",
              alignItems: "center",
            }}
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
          <button
            type="submit"
            style={{
              //   border: "1px solid red",
              //   padding: "4px",
              //   display: "flex",
              //   width: "392px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "80px",
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
