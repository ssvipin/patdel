import React from "react";
import img3 from "../../media/Chef-character-design-premium-vector-PNG.png";
import "./index.css";
import Fb from "../../media/facebook.svg";
import insta from "../../media/instagram.svg";
import yt from "../../media/youtube.svg";
const ChefCards = ({ setChefClicked }) => {
  const chef = [
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
    {
      name: "Vipin Kumar",
      experience: "3+ Years",
      likes: "324k",
      recepies: "10",
      key: "chef1",
      image: img3,
      cuisine: "Indian",
    },
  ];
  return (
    <div className="chefCards_container">
      <div
        style={
          {
            // border: "1px solid red",
          }
        }
      >
        <h1
          style={{
            // border: "1px solid red",
            textAlign: "center",
          }}
        >
          Our Top Chef's
        </h1>
        <p
          style={{
            // border: "1px solid red",
            textAlign: "center",
            marginTop: "20px",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Our top chefs bring a fusion of expertise and passion to the table,
          crafting culinary experiences that redefine taste, elevating each dish
          to an artful masterpiece.
        </p>
      </div>
      <div className="chefCards_wrapper">
        {chef.map((item) => {
          return (
            <div className="chefCards_cardWrapper" key={item.key}>
              <div
                style={{
                  // border: "1px solid black",
                  // background: "rgb(88 31 91)",
                  // background: "rgba(255,255,255,0)",
                  borderTopStyle: "none",
                  // borderRadius: "32px",
                  // boxShadow:
                  // "0px 2px 4px -1px rgba(255,255,255,0.2), 0px 4px 5px 0px rgba(255,255,255,0.14), 0px 1px 10px 0px rgba(255,255,255,0.12)",
                  // boxShadow: "4px 4px 2px 0px #f2f2f2",
                  display: "flex",
                }}
              >
                <img
                  src={item.image}
                  style={{
                    width: "200px",
                    height: "100%",
                    // borderRadius: "32px 32px 0 0",
                    // border: "1px solid red",
                  }}
                />
                <div
                  style={{
                    // border: "1px solid black",
                    padding: "8px",
                    // borderRadius: "0 0 32px 32px",
                  }}
                >
                  <p
                    style={{
                      // border: "1px solid red",
                      margin: "0",
                      // padding: "4px",
                      fontSize: "18px",
                      // color: "#f2f2f2",
                      color: "#f5f5dc",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      // border: "1px solid red",
                      margin: "0",
                      marginTop: "4px",
                      // padding: "4px",
                      fontSize: "12px",
                      // color: "rgba(0,0,0,0.7)",
                      lineHeight: "18px",
                      // color: "#f2f2f2",
                      color: "#f5f5dc",
                    }}
                  >
                    <span
                    // style={{
                    //   color: "rgba(0,0,0,0.7)",
                    // }}
                    >
                      Experience:{" "}
                    </span>
                    {item.experience}
                  </p>
                  <p
                    style={{
                      // border: "1px solid red",
                      margin: "0",
                      // marginTop: "4px",
                      // padding: "4px",
                      fontSize: "12px",
                      // color: "rgba(0,0,0,0.7)",
                      lineHeight: "18px",
                      // color: "#f2f2f2",
                      color: "#f5f5dc",
                    }}
                  >
                    Recipes: {item.recepies}
                  </p>
                  <p
                    style={{
                      // border: "1px solid red",
                      margin: "0",
                      // marginTop: "4px",
                      // padding: "4px",
                      fontSize: "12px",
                      // color: "rgba(0,0,0,0.7)",
                      lineHeight: "18px",
                      // color: "#f2f2f2",
                      color: "#f5f5dc",
                    }}
                  >
                    Cuisine: {item.cuisine}
                  </p>
                  <p
                    style={{
                      // border: "1px solid red",
                      margin: "0",
                      // marginTop: "4px",
                      // padding: "4px",
                      fontSize: "12px",
                      // color: "rgba(0,0,0,0.7)",
                      lineHeight: "18px",
                      // color: "#f2f2f2",
                      color: "#f5f5dc",
                    }}
                  >
                    Likes: {item.likes}
                  </p>
                  <ul
                    style={{
                      // border: "1px solid red",
                      listStyleType: "none",
                      display: "flex",
                      padding: "0",
                      margin: "0",
                      // justifyContent: "flex-start",
                    }}
                  >
                    <a
                      style={{
                        // border: "1px solid red",
                        textDecoration: "none",
                        padding: "12px 4px",
                      }}
                    >
                      <li>
                        <img src={Fb} />
                        {/* <Fb /> */}
                      </li>
                    </a>
                    <a
                      style={{
                        // border: "1px solid red",
                        textDecoration: "none",
                        padding: "12px 4px",
                      }}
                    >
                      <li>
                        <img src={insta} />
                      </li>
                    </a>
                    <a
                      style={{
                        // border: "1px solid red",
                        textDecoration: "none",
                        padding: "12px 4px",
                      }}
                    >
                      <li>
                        <img src={yt} />
                      </li>
                    </a>
                  </ul>
                  <button
                    onClick={() => {
                      setChefClicked([{ ...item }]);
                    }}
                    style={{
                      // height: "48px",
                      width: "100%",
                      marginTop: "12px",
                      // border: "none",
                    }}
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ChefCards);
