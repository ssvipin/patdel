import React from "react";
import { Link } from "react-router-dom";
import "./parent.css";
const Navbar = () => {
  const handleSign = () => {
    window.location.href = "/signin";
  };
  return (
    <div
      style={{
        background: "black",
        // height: "10%",
        // width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // border: "1px solid red",
      }}
    >
      <div
        style={{
          // height: "100%",
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid red",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "roboto",
            // border: "1px solid red",
            margin: "0",
          }}
        >
          Kitchen
        </h1>
      </div>
      <div
        style={{
          // height: "100%",
          width: "70%",
          // border: "1px solid red",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            // border: "1px solid red",
            // alignItems: "center",
            display: "flex",
            // border: "1px solid red",
            // height:"70%"
          }}
        >
          <li
            className="home"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </li>
          <li
            style={{
              display: "inline-block",
              //   border: "1px solid white",
              marginLeft: "16px",
              color: "white",
              fontSize: "24px",
              fontWeight: "400",
              fontFamily: "roboto",
              // border: "1px solid red",
            }}
          >
            Blog
          </li>
          <button className="signin" onClick={handleSign}>
            Signin
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
