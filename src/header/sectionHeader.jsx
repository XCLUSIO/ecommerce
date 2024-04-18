import React from "react";
import "../header/sectionHeader.css";
import clothes from "../assets/Images/clothes/clothes 1.png"
import phones from "../assets/Images/phones/phone 1 o.png"
import icons from "../assets/icons/Vector.svg"
function Header() {
  return (
    <section className="section">
      <div className="header">
        <div className="headertext">Recently viewed</div>
        <span className="seeall">See All</span>
      </div>

      <div className="productGrid">
        <div className="product-item">
          <div
            className="product"
            style={{
              background: `url(${clothes})`,
              border : "1px solid #333",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <span className="add-wishlist">
              <img src={icons} alt="" />
            </span>
          </div>
          <div className="product-details">
              <h3>Summer TEES</h3>
              <p>N25,000</p>
            </div>
        </div>

        <div className="product-item">
          <div
            className="product"
            style={{
              background: `url(${phones})`,
              border : "1px solid #333",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          >
            <span className="add-wishlist">
              <img src= {icons} alt="" />
            </span>
          </div>
          <div className="product-details">
              <h3>Iphone 14</h3>
              <p>N750,000</p>
            </div>
        </div>

        <div className="product-item">
          <div
            className="product"
            style={{
              background: "url(https://i.ebayimg.com/thumbs/images/g/YKUAAOSw2glk1USh/s-l960.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="add-wishlist">
              <img src="" alt="" />
            </span>
            <div className="product-details">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="product-item">
          <div
            className="product"
            style={{
              background: "url(https://i.ebayimg.com/thumbs/images/g/YKUAAOSw2glk1USh/s-l960.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="add-wishlist">
              <img src="" alt="" />
            </span>
            <div className="product-details">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="product-item">
          <div
            className="product"
            style={{
              background: "url(https://i.ebayimg.com/thumbs/images/g/YKUAAOSw2glk1USh/s-l960.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="add-wishlist">
              <img src="" alt="" />
            </span>
            <div className="product-details">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="product-item">
          <div
            className="product"
            style={{
              background: "url(https://i.ebayimg.com/thumbs/images/g/YKUAAOSw2glk1USh/s-l960.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="add-wishlist">
              <img src="" alt="" />
            </span>
            <div className="product-details">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
