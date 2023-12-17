import React from "react";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Pricing = () => {
  console.log("pricing page");
  const pricingCards = [
    {
      logo: (
        <MdOutlineTableRestaurant
          style={{
            fontSize: "54px",
            fontWeight: "300",
            // color: "rgba(0,0,0,0.5)",
            color: "#4c7d60",
          }}
        />
      ),
      package_name: "Intimate Package",
      price: "$289",
      validity: "per event",
      menu: "2-4 serving Menu",
      course: "8 main course menu",
      menu_type: "Customised Menu",
      isChef_available: "chef's Expertise",
      is_grocery: "Grocery Shopping",
      bonus: "Prepration & Clean Up",
      key: "key1",
    },
    {
      logo: (
        <MdOutlineTableRestaurant
          style={{
            fontSize: "54px",
            fontWeight: "300",
            // color: "rgba(0,0,0,0.5)",
            color: "#4c7d60",
          }}
        />
      ),
      package_name: "Intimate Package",
      price: "$289",
      validity: "per event",
      menu: "2-4 serving Menu",
      course: "8 main course menu",
      menu_type: "Customised Menu",
      isChef_available: "chef's Expertise",
      is_grocery: "Grocery Shopping",
      bonus: "Prepration & Clean Up",
      key: "key2",
    },
    {
      logo: (
        <MdOutlineTableRestaurant
          style={{
            fontSize: "54px",
            fontWeight: "300",
            // color: "rgba(0,0,0,0.5)",
            color: "#4c7d60",
          }}
        />
      ),
      package_name: "Intimate Package",
      price: "$289",
      validity: "per event",
      menu: "2-4 serving Menu",
      course: "8 main course menu",
      menu_type: "Customised Menu",
      isChef_available: "chef's Expertise",
      is_grocery: "Grocery Shopping",
      bonus: "Prepration & Clean Up",
      key: "key3",
    },
  ];
  return (
    <div className="pricing_container">
      {pricingCards.map((item) => {
        return (
          <div
            style={{
              width: "25%",
              minWidth: "250px",
              padding: "48px 12px",
              background: "#fff",
            }}
            key={item.key}
          >
            <div
              style={{
                padding: "5px",
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              {item.logo}
            </div>
            <div
              style={{
                color: "#4c7d60",
              }}
            >
              <h2
                style={{
                  marginBottom: "15px",
                  margin: "5px",
                  textAlign: "center",
                }}
              >
                {item.package_name}
              </h2>
              <div
                style={{
                  marginBottom: "20px",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "40px",
                  }}
                >
                  {item.price}
                </h1>
                <p>{item.validity}</p>
              </div>
              <div
                style={{
                  marginBottom: "20px",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.menu}
                </p>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.course}
                </p>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.menu_type}
                </p>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.isChef_available}
                </p>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.is_grocery}
                </p>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  {item.bonus}
                </p>
              </div>
              <div>
                <button
                  style={{
                    width: "100%",
                    height: "48px",
                    border: "none",
                    background: "#f2f2f2",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Pricing);
