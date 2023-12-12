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
import "./index.css";
const SubAbout = () => {
  return (
    <div className="sayAbout_container">
      <div className="sayAbout_left">
        <div
          style={
            {
              // border: "1px solid black",
            }
          }
        >
          <h1
            style={{
              // border: "1px solid red",
              margin: "0",
              padding: "4px",
              textAlign: "center",
            }}
          >
            Hi Foodies
          </h1>
        </div>
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <p
            style={{
              // border: "1px solid red",
              padding: "4px",
              textAlign: "center",
              lineHeight: "30px",
              wordSpacing: "3px",
              letterSpacing: "0.5px",
              fontSize: "24px",
            }}
          >
            Where culinary creativity meets home comfort—discover the art of
            exceptional cooking with our kitchen website, your gateway to
            inspired meals and gourmet delights.
          </p>
          <p
            style={{
              // border: "1px solid red",
              padding: "4px",
              textAlign: "center",
              marginTop: "20px",
              lineHeight: "20px",
              wordSpacing: "3px",
              color:"gray"
            }}
          >
            Where culinary creativity meets home comfort—discover the art of
            inspired meals and gourmet delights.
          </p>
        </div>
      </div>
      <div className="sayAbout_right">
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            // justifyContent: "center",
            // maxWidth: "380px",
          }}
        >
          <img
            src={img1}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #4c7d60",
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
              // right: "20px",
              border: "6px solid #4c7d60",
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
              // right: "40px",
              border: "6px solid #4c7d60",
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
              // right: "60px",
              border: "6px solid #4c7d60",
            }}
          />
          {/* <img
            src={img5}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              // right: "80px",
              border: "6px solid #4c7d60",
            }}
          /> */}
        </div>
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            // justifyContent: "center",
            width: "380px",
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
              border: "6px solid #4c7d60",
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
              border: "6px solid #4c7d60",
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
              border: "6px solid #4c7d60",
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
              border: "6px solid #4c7d60",
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
              border: "6px solid #4c7d60",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubAbout;
