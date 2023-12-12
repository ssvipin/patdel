import React from "react";
import img1 from "../../media/IMG_5974.jpg";
import img2 from "../../media/nChurma.jpeg";
import img3 from "../../media/nMonje.jpeg";
import img4 from "../../media/taba.jpeg";
import img5 from "../../media/w-11.jpeg";
import img6 from "../../media/w-12.jpeg";
import img7 from "../../media/w-13.jpeg";
import img8 from "../../media/w-15.jpeg";
import img9 from "../../media/w-16.jpeg";
import img10 from "../../media/w-17.jpeg";
const SubAbout = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        marginTop: "48px",
        display: "flex",
        padding: "12px 48px",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          // border: "1px solid red",
          width: "50%",
          padding: "12px 16px",
          minWidth: "250px",
        }}
      >
        <div
          style={
            {
              // border: "1px solid black",
            }
          }
        >
          <h1
            style={{
              //   border: "1px solid red",
              margin: "0",
              padding: "4px",
            }}
          >
            Hi Foodies
          </h1>
        </div>
        <div>
          <p
            style={{
              //   border: "1px solid red",
              padding: "4px",
            }}
          >
            Where culinary creativity meets home comfort—discover the art of
            exceptional cooking with our kitchen website, your gateway to
            inspired meals and gourmet delights.
          </p>
          <p
            style={{
              //   border: "1px solid red",
              padding: "4px",
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
          //   border: "1px solid red",
          width: "40%",
          minWidth: "400px",
          padding: "12px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            // justifyContent: "center",
            width: "320px",
          }}
        >
          <img
            src={img1}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <img
            src={img2}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "20px",
            }}
          />
          <img
            src={img3}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "40px",
            }}
          />
          <img
            src={img4}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "60px",
            }}
          />
          <img
            src={img5}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "80px",
            }}
          />
        </div>
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            // justifyContent: "center",
            width: "320px",
            marginTop: "12px",
            // width: "100%",
          }}
        >
          <img
            src={img6}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <img
            src={img7}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "20px",
            }}
          />
          <img
            src={img3}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "40px",
            }}
          />
          <img
            src={img4}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "60px",
            }}
          />
          <img
            src={img1}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              right: "80px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubAbout;
