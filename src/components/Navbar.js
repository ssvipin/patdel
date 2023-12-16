import React from "react";
import { Link } from "react-router-dom";
import "./parent.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const handleSign = () => {
    window.location.href = "/signin";
  };
  console.log(window);
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
          minWidth: "200px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "roboto",
            // border: "1px solid red",
            margin: "0",
            padding: "0.5em",
          }}
        >
          Kitchen
        </h1>
      </div>
      <div className="navbar_menu">
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
            style={{
              color: `${window.location.pathname === "/" ? "#4c7d60" : "#fff"}`,
            }}
          >
            Home
          </li>
          <li
            style={{
              display: "inline-block",
              //   border: "1px solid white",
              marginLeft: "16px",
              fontSize: "24px",
              fontWeight: "400",
              fontFamily: "roboto",
              // border: "1px solid red",
              color: `${
                window.location.pathname === "/blog" ? "#4c7d60" : "#fff"
              }`,
            }}
          >
            Blog
          </li>
          <button className="signin" onClick={handleSign}>
            Signin
          </button>
        </ul>
      </div>
      <div className="hamburger">
        <RxHamburgerMenu
          style={{
            color: "#f2f2f2",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
