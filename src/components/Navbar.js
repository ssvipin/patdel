import React, { useEffect, useState, useContext, createContext } from "react";
import "./parent.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavbarComponent = ({ updateCounter }) => {
  const [photoURL, setPhotoURL] = useState("");
  const [displayName, setDisplayName] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("vipin", user);
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
      const uid = user.uid;
      // ...
    } else {
      setDisplayName("");
      setPhotoURL("");
      // User is signed out
      // ...
    }
  });
  const handleSign = () => {
    window.location.href = "/signin";
  };
  const handleLogout = async (e) => {
    signOut(auth)
      .then((data) => {
        console.log(data);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    console.log(
      "vipsu",

      JSON.parse(localStorage.getItem("recipe"))?.length,
      localStorage.getItem("recipe"),
      JSON.parse(localStorage.getItem("recipe"))?.length > 0
    );
  }, [updateCounter]);

  // console.log(window);
  return (
    // <div
    //   style={{
    //     background: "black",
    //     // height: "10%",
    //     // width: "100%",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     // border: "1px solid red",
    //   }}
    // >
    //   <div
    //     style={{
    //       // height: "100%",
    //       width: "20%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       // border: "1px solid red",
    //       minWidth: "200px",
    //     }}
    //   >
    //     <h1
    //       style={{
    //         color: "white",
    //         fontFamily: "roboto",
    //         // border: "1px solid red",
    //         margin: "0",
    //         padding: "0.5em",
    //       }}
    //     >
    //       Kitchen
    //     </h1>
    //   </div>
    //   <div className="navbar_menu">
    //     <ul
    //       style={{
    //         listStyleType: "none",
    //         // border: "1px solid red",
    //         // alignItems: "center",
    //         display: "flex",
    //         // border: "1px solid red",
    //         height: "100%",
    //         margin: "0",
    //         alignItems: "center",
    //       }}
    //     >
    //       <li
    //         className="home"
    //         onClick={() => {
    //           window.location.href = "/";
    //         }}
    //         style={{
    //           color: `${window.location.pathname === "/" ? "#4c7d60" : "#fff"}`,
    //         }}
    //       >
    //         Home
    //       </li>
    //       <li
    //         style={{
    //           display: "inline-block",
    //           //   border: "1px solid white",
    //           marginLeft: "16px",
    //           fontSize: "24px",
    //           fontWeight: "400",
    //           fontFamily: "roboto",
    //           // border: "1px solid red",
    //           color: `${
    //             window.location.pathname === "/blog" ? "#4c7d60" : "#fff"
    //           }`,
    //         }}
    //       >
    //         Blog
    //       </li>
    //       {localStorage.getItem("recipe") &&
    //         JSON.parse(localStorage.getItem("recipe"))?.length > 0 && (
    //           <li
    //             style={{
    //               display: "inline-block",
    //               //   border: "1px solid white",
    //               marginLeft: "16px",
    //               fontSize: "24px",
    //               fontWeight: "400",
    //               fontFamily: "roboto",
    //               // border: "1px solid red",
    //               color: `${
    //                 window.location.pathname === "/favorite"
    //                   ? "#4c7d60"
    //                   : "#fff"
    //               }`,
    //             }}
    //             onClick={() => {
    //               window.location.href = "/favorite";
    //             }}
    //           >
    //             Favorite
    //           </li>
    //         )}
    //       {displayName?.length > 0 ? (
    //         <button className="signin">
    //           <Dropdown>
    //             <Dropdown.Toggle
    //               id="dropdown-basic"
    //               style={{
    //                 background: "transparent",
    //                 border: "none",
    //               }}
    //             >
    //               <img
    //                 src={photoURL}
    //                 style={{
    //                   borderRadius: "50%",
    //                   height: "40px",
    //                 }}
    //                 alt="logo"
    //               />
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu>
    //               <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
    //               <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
    //             </Dropdown.Menu>
    //           </Dropdown>
    //         </button>
    //       ) : (
    //         <button className="signin" onClick={handleSign}>
    //           Signin
    //         </button>
    //       )}
    //     </ul>
    //   </div>

    //   <div className="hamburger">
    //     <RxHamburgerMenu
    //       style={{
    //         color: "#f2f2f2",
    //       }}
    //     />
    //   </div>
    // </div>
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">Kitchen Kings</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {displayName?.length > 0 ? (
              <button className="signin">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <img
                      src={photoURL}
                      style={{
                        borderRadius: "50%",
                        height: "40px",
                      }}
                      alt="logo"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>
                      Log out
                    </Dropdown.Item>
                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </button>
            ) : (
              <Nav.Link href="/signin" className="ml-auto">
                Signin
              </Nav.Link>
              // <button className="signin" onClick={handleSign}>
              //   Signin
              // </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
