import React from 'react';
import './productShow.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
    const [myData, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/showCart')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            

            <section id="cart-header" className="about-header">
                <h1 style={{ color: 'lawngreen' }}>#Shop Cart</h1>
                <p style={{ color: 'lawngreen' }}>Buy What You Want.</p>
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
                        {myData.map((pro) => {
                            let { id, item, category, price } = pro;
                            return (
                                <tr key={id}>
                                    <td><i className="fa-regular fa-circle-xmark"></i><a href="#"></a></td>
                                    <td><img src="./img1/blog-3.jpg" alt="" /></td>
                                    <td>{item}</td>
                                    <td>${price}</td>
                                    <td><input type="number" defaultValue="1" /></td>
                                    <td>${price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>

            <section id="cart-add" className="section-p1">
                {/* <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div> */}
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$ 335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$ 335</strong></td>
                        </tr>
                    </table>
                    <button className="normal">Proceed to Checkout</button>
                </div>
            </section>

            <footer id="footer" className="section-p1">
                <div className="col">
                    <img className="logo" src="./img1/logo.png" alt="Logo" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> Anand, Gujarat</p>
                    <p><strong>Phone:</strong> +91 1234567890</p>
                    <p><strong>Hours:</strong> 24/7</p>
                    <h4>Follow Us</h4>
                    <div className="follow">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign in</a>
                    <a href="#">View Cart</a>
                    <a href="#">Help</a>
                </div>
            </footer>
        </>
    );
}
