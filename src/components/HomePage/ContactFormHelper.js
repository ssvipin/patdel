import React from "react";
import img from "../../media/26845.jpg";
const ContactFormHelper = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        // marginTop: "48px",
        padding: "12px 48px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <img src={img} style={{ width: "100%" }} />
      {/* <div
        style={{
          //   border: "1px solid red",
          //   maxWidth: "60%",
          padding: "12px 24px",
        }}
      >
        <div className="text">
          <h3>CONTACT US</h3>
          <h1 style={{ margin: "20px 0" }}>
            Reach Out to Us for Inquiries, Bookings, and More.
          </h1>
        </div>
        <div
          className="input"
          style={{
            // border: "1px solid red",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="First name here"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
            //   minWidth: "650px",
              marginTop: "20px",
            }}
          />
          <input
            type="text"
            placeholder="Last name here"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
            //   minWidth: "650px",
              marginTop: "20px",
            }}
          />
          <input
            type="email"
            placeholder="Add email"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
            //   minWidth: "650px",
              marginTop: "20px",
            }}
          />
          <input
            type="text"
            placeholder="How can i help you?"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
            //   minWidth: "650px",
              marginTop: "20px",
            }}
          />
          <textarea
            placeholder="Comments"
            style={{
              height: "150px",
              borderStyle: "none none solid none",
            //   minWidth: "650px",
              marginTop: "40px",
            }}
          />
        </div>
        <div
          className="button"
          style={{
            marginTop: "20px",
          }}
        >
          <button
            style={{
              height: "50px",
              background: "transparent",
              border: "1px solid red",
              padding: "0 24px",
            }}
          >
            SEND MESSAGE
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactFormHelper;
