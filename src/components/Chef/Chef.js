import React from "react";
import img from "../../media/magicpattern-blob-1702450305034.png";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import img2 from "../../media/image-from-rawpixel-id-12187877-original.png";
const Chef = ({ chefClicked }) => {
  return (
    <div
      style={{
        // border: "1px solid red",
        // height: "750px",
        padding: "12px 16px",
        display: "flex",
        background: "#f2f2f2",
      }}
    >
      <div
        style={{
          //   border: "1px solid red",
          width: "50%",
          padding: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // border: "1px solid red",
            padding: "8px",
          }}
        >
          <h3
            style={{
              //   border: "1px solid red",
              padding: "8px",
            }}
          >
            Hi Foodie
          </h3>
          <h1
            style={{
              //   border: "1px solid red",
              padding: "8px",
              fontFamily: "roboto",
            }}
          >
            Welcome to {chefClicked[0].name}'s Kitchen
          </h1>
        </div>
        <div
          style={{
            // border: "1px solid red",
            marginTop: "20px",
            padding: "8px",
          }}
        >
          <p
            style={{
              //   border: "1px solid red",
              marginTop: "20px",
              padding: "4px",
              letterSpacing: "0.2px",
              lineHeight: "25px",
              fontFamily: "cursive",
              fontSize: "20px",
              //   color: "blue",
            }}
          >
            Welcome to the flavorful world of Chef Vipin Kumar, where every dish
            is a masterpiece crafted with creativity, skill, and a dash of
            heartfelt dedication.
          </p>
        </div>
        <div
          style={{
            // border: "1px solid red",
            marginTop: "20px",
            padding: "8px",
          }}
        >
          <div
            style={{
              // border: "1px solid red",
              padding: "4px",
            }}
          >
            <ul
              style={{
                // border: "1px solid red",
                listStyleType: "none",
                display: "flex",
                padding: "0",
                // justifyContent: "flex-start",
              }}
            >
              <a
                style={{
                  //   border: "1px solid red",
                  textDecoration: "none",
                  padding: "12px 16px",
                }}
              >
                <li>
                  <FaFacebookF />
                </li>
              </a>
              <a
                style={{
                  //   border: "1px solid red",
                  textDecoration: "none",
                  padding: "12px 16px",
                }}
              >
                <li>
                  <AiFillInstagram />
                </li>
              </a>
              <a
                style={{
                  //   border: "1px solid red",
                  textDecoration: "none",
                  padding: "12px 16px",
                }}
              >
                <li>
                  <FaTwitter />
                </li>
              </a>
              <a
                style={{
                  //   border: "1px solid red",
                  textDecoration: "none",
                  padding: "12px 16px",
                }}
              >
                <li>
                  <IoLogoYoutube />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div
          style={{
            // border: "1px solid red",
            marginTop: "200px",
            padding: "8px",
          }}
        >
          <button
            style={{
              margin: "4px",
              width: "100%",
              height: "48px",
              fontSize: "24px",
            }}
          >
            Donate me a Coffee
          </button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "50%",
        }}
      >
        <div
          style={{
            // border: "1px solid red",
            width: "100%",
            position: "absolute",
            top: "100px",
          }}
        >
          <img
            src={img}
            style={{
              //   border: "1px solid red",
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            // border: "1px solid red",
            width: "100%",
            position: "absolute",
            top: "0",
          }}
        >
          <img
            src={img2}
            style={{
              //   border: "1px solid red",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chef;
