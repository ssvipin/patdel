import React from "react";

const ContactForm = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "12px 24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        // background:"red"
      }}
    >
      <div
        style={{
          //   border: "1px solid red",
          //   maxWidth: "60%",
          padding: "12px 24px",
          // background: "red",
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
            width: "100%",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="First name here"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
              width: "60%",
              marginTop: "20px",
              padding: "0 12px",
            }}
          />
          <input
            type="text"
            placeholder="Last name here"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
              // minWidth: "650px",
              marginTop: "20px",
              width: "60%",
              padding: "0 12px",
            }}
          />
          <input
            type="email"
            placeholder="Add email"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
              // minWidth: "650px",
              marginTop: "20px",
              width: "60%",
              padding: "0 12px",
            }}
          />
          <input
            type="text"
            placeholder="How can i help you?"
            style={{
              height: "48px",
              borderStyle: "none none solid none",
              // minWidth: "650px",
              marginTop: "20px",
              width: "60%",
              padding: "0 12px",
            }}
          />
          <textarea
            placeholder="Comments"
            style={{
              height: "150px",
              borderStyle: "none none solid none",
              // minWidth: "650px",
              marginTop: "40px",
              width: "60%",
              padding: "12px 12px",
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
              background: "white",
              border: "1px solid red",
              padding: "0 24px",
            }}
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
      {/* <div></div> */}
      {/* ContactForm */}
    </div>
  );
};

export default ContactForm;
