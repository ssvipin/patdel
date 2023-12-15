import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can implement your login logic (e.g., check credentials)
    // For simplicity, this example just sets loggedIn to true if username and password are not empty
    if (username && password) {
      setLoggedIn(true);
      // You might want to redirect the user to another page upon successful login
      // You can use React Router's history or redirect accordingly
    } else {
      alert("Please enter username and password.");
    }
  };

  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "12px 16px",
        height: "50%",
        marginBottom: "-48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
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
            Login
          </h2>
        </div>
        <form
          onSubmit={handleLogin}
          style={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            marginTop: "40px",
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
          <button
            type="submit"
            style={{
              //   border: "1px solid red",
              //   padding: "4px",
              //   display: "flex",
              width: "362px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "80px",
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
