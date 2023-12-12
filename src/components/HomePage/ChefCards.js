import React from "react";
import img1 from "../../media/w-1.jpeg";
const ChefCards = () => {
  const chef = [
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
    {
      name: "Vipin Kumar",
      experience: "5+ years of Experience",
      recepies: "40+ recepies",
      likes: "324k likes",
      books: "3 books",
      button: "link",
      key: "chef1",
      image: img1,
    },
  ];
  return (
    <div
      style={{
        // border: "1px solid black",
        padding: "12px 48px",
        // width: "100%",
      }}
    >
      <div
        style={{
          //   border: "1px solid red",
          display: "flex",
          //   width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {chef.map((item) => {
          return (
            <div
              style={{
                // border: "1px solid black",
                width: "30%",
                padding: "4px",
                minWidth: "250px",
              }}
              key={item.key}
            >
              <div>
                <img src={item.image} style={{ width: "100%" }} />
                <div
                  style={{
                    // border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  <h1
                    style={{
                      //   border: "1px solid red",
                      margin: "0",
                      padding: "4px",
                    }}
                  >
                    {item.name}
                  </h1>
                  <p
                    style={{
                      //   border: "1px solid red",
                      margin: "0",
                      padding: "4px",
                    }}
                  >
                    {item.experience}
                  </p>
                  <p
                    style={{
                      //   border: "1px solid red",
                      margin: "0",
                      padding: "4px",
                    }}
                  >
                    {item.experience}
                  </p>
                  <p
                    style={{
                      //   border: "1px solid red",
                      margin: "0",
                      padding: "4px",
                    }}
                  >
                    {item.likes}
                  </p>
                  <p
                    style={{
                      //   border: "1px solid red",
                      margin: "0",
                      padding: "4px",
                    }}
                  >
                    {item.books}
                  </p>
                  <button onClick={item.button}>View Recepies</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChefCards;
