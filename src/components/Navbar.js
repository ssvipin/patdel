import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        background: "black",
        height: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "roboto",
          }}
        >
          Kitchen
        </h1>
      </div>
      <div
        style={{
          height: "100%",
          width: "70%",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            // border: "1px solid red",
            alignItems: "center",
            display: "flex",
          }}
        >
          <li
            style={{
              display: "inline-block",
              //   border: "1px solid white",
              marginLeft: "16px",
              color: "white",
              fontSize: "24px",
              fontWeight: "400",
              fontFamily: "roboto",
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
            }}
          >
            Blog
          </li>
          <li
            style={{
              display: "inline-block",
              //   border: "1px solid white",
              color: "white",
              marginLeft: "auto",
              marginRight: "16px",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            picture
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
