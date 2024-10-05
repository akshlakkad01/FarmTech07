import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import './productShow.css';


export default function ProductShow() {
  const [myData, setData] = useState([]);
  const navigate = useNavigate();

  const firstCookie = Cookies.get("cookie");
  const secondCookie = Cookies.get("loginCookie");

  const addInCart = async (item) => {
    alert("Product added to the cart");
    const data = {
      cart_id: item.id,
      cart_name: item.name,
      cart_category: item.category,
      cart_price: item.price,
    };
    await axios.post("http://localhost:8080/addCart", data);
  };

  useEffect(() => {
    if (!(firstCookie || secondCookie)) {
      navigate("/signup");
    }

    const res = axios
      .get("http://localhost:8080/showPro")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [firstCookie, secondCookie, navigate]);

  return (
    <>
      <section className="container">
        <h1>All Products</h1>
      </section>

      <section id="products" className="section-p1">
        <div className="pro-container">
          <div className="pro-item" onClick={() => window.location.href='vegetable'}>
            <div className="product-image vegetable"></div>
            <div className="des">
              <h5>Vegetables</h5>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          </div>
          <div className="pro-item" onClick={() => window.location.href='fruit'}>
            <div className="product-image fruit"></div>
            <div className="des">
              <h5>Fruits</h5>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          </div>
          <div className="pro-item" onClick={() => window.location.href='grain'}>
            <div className="product-image grains"></div>
            <div className="des">
              <h5>Grains</h5>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer">
            <div className="col">
                <p><strong>Address:</strong>changa,Anand</p>
                <p><strong>Phone:</strong>+91 7984316011</p>
                <p><strong>Hours:</strong>24/7</p>
                <h4>Follow Us</h4>
                <div className="follow">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div className="col">
                <a href="about">About us</a>
                <a href="contact">Contact Us</a>
            </div>
            <div className="col">
                <a href="Profile">My Account</a>
                <a href="showCart">View Cart</a>
                <a href="contact">Help </a>
            </div>
            <div className="col install">
               
                </div>
        </footer>
      
    </>
  );
}