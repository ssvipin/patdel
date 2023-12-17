import React from "react";
import img from "../media/5203299.jpg";
const NotFound = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    textAlign: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "50vh",
  };

  return (
    <div style={containerStyle}>
      <img src={img} alt="404 Error" style={imageStyle} />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
