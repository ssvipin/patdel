import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "40%",
        background: "black",
        // position: "absolute",
        // bottom: "0",
        // width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "48px",
      }}
    >
      <div
        style={{
          width: "30%",
          border: "1px solid white",
          padding: "24px 12px",
        }}
      >
        <div style={{ border: "1px solid red" }}>
          <h1
            style={{ color: "white", border: "1px solid white", margin: "0" }}
          >
            Kitchen
          </h1>
          <p
            style={{
              color: "white",
              border: "1px solid white",
              margin: "0",
              fontFamily: "roboto",
            }}
          >
            Where culinary creativity meets home comfort—discover the art of
            exceptional cooking with our kitchen website, your gateway to
            inspired meals and gourmet delights."
          </p>
        </div>
      </div>
      <div style={{ width: "30%", border: "1px solid white" }}></div>
      <div style={{ width: "30%", border: "1px solid white" }}></div>
    </div>
  );
};

export default Footer;
