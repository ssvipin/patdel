import React from "react";
import ContactForm from "./ContactForm";
import ContactFormHelper from "./ContactFormHelper";

const ContactUs = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "48px 24px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "93%",
          zIndex: "1",
          backdropFilter:"blur(4px)"
        }}
      >
        <ContactForm />
      </div>
      <div
        style={{
          maxWidth: "85%",
          position: "absolute",
          left: "25px",
        }}
      >
        <ContactFormHelper />
      </div>
    </div>
  );
};

export default ContactUs;
