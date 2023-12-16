import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "black",
        marginTop: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          // border: "1px solid red",
          padding: "12px 16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "30%",
            // border: "1px solid red",
            padding: "0px 12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={
              {
                // border: "1px solid red"
              }
            }
          >
            <h1
              style={{
                color: "white",
                // border: "1px solid red",
                padding: "4px",
                margin: "0",
              }}
            >
              Kitchen
            </h1>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                marginTop: "18px",
              }}
            >
              Where culinary creativity meets home comfort—discover the art of
              exceptional cooking with our kitchen website, your gateway to
              inspired meals and gourmet delights.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            // border: "1px solid red",
            padding: "0px 12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={
              {
                // border: "1px solid red"
              }
            }
          >
            <h1
              style={{
                color: "white",
                // border: "1px solid red",
                padding: "4px",
                margin: "0",
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                marginTop: "18px",
              }}
            >
              vipin.kumar@patdelanalytics.com
            </p>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                // marginTop: "18px",
              }}
            >
              +91-9149390858
            </p>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                // marginTop: "18px",
              }}
            >
              Mohali, Punjab
            </p>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            // border: "1px solid red",
            padding: "0px 12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={
              {
                // border: "1px solid red"
              }
            }
          >
            <h1
              style={{
                color: "white",
                // border: "1px solid red",
                padding: "4px",
                margin: "0",
              }}
            >
              Socials
            </h1>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                marginTop: "18px",
              }}
            >
              Facebook
            </p>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                // marginTop: "18px",
              }}
            >
              Twitter
            </p>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                // marginTop: "18px",
              }}
            >
              Instagram
            </p>
            <p
              style={{
                color: "white",
                // border: "1px solid red",
                margin: "0",
                fontFamily: "roboto",
                color: "rgba(255,255,255,0.7)",
                padding: "4px",
                // marginTop: "18px",
              }}
            >
              Linkedin
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          // border: "1px solid red",
          padding: "8px",
        }}
      >
        <p
          style={{
            // border: "1px solid red",
            padding: "4px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
          }}
        >
          All Rights reserved @ <a>Patdel Analytics</a> 2023 Made by Vipin Kumar
        </p>
      </div>
    </div>
  );
};

export default Footer;
