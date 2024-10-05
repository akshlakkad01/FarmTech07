import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./productShow.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const firstCookie = Cookies.get("cookie");
  const secondCookie = Cookies.get("loginCookie");
  if (!(firstCookie || secondCookie)) {
    navigate("/signup");
  }
  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/showCart");
      const itemsWithQuantity = response.data.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setCartItems(itemsWithQuantity);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotal = () => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = async (item) => {
    // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    try {
      const res = await axios.post(`http://localhost:8080/deleteCart`, item);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <section id="cart-header" className="about-header">
        <h1 style={{ color: "lawngreen" }}>#Shop Cart</h1>
        <p style={{ color: "lawngreen" }}>Buy What You Want.</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price/Kg</td>
              <td>Quantity(Kg)</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <button
                    className="fa-regular fa-circle-xmark"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <img src="./img1/blog-3.jpg" alt={item.item} />
                </td>
                <td>{item.item}</td>
                <td>&#8377;{item.price}</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>&#8377;{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>&#8377;{total.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>&#8377;{total.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to Checkout</button>
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
