import React from 'react';
import './profile.css'; // Import the CSS file

const UserAccount = () => {
    return (
        <>
        <div className="user-account-container">
            {/* Sidebar Section */}
            <div className="account-sidebar">
                <h3>My Account</h3>
                <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    {/* <li>Wishlist</li> */}
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
            {/* Main Account Details Section */}
            <div className="account-details">
                {/* Profile Section */}
                <div className="profile-section">
                    <h2>Welcome, Akshay Lakkad</h2>
                    <p>Email: ak@gmail.com</p>
                    <p>Phone: +91 9897969594</p>
                </div>

                {/* Orders Section */}
                <div className="orders-section">
                    <h2>Your Orders</h2>
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345</td>
                                <td>2024-09-20</td>
                                <td>Delivered</td>
                                <td>₹45.00</td>
                            </tr>
                            <tr>
                                <td>12346</td>
                                <td>2024-09-19</td>
                                <td>Shipped</td>
                                <td>₹32.00</td>
                            </tr>
                            <tr>
                                <td>12347</td>
                                <td>2024-09-18</td>
                                <td>Processing</td>
                                <td>₹28.50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
                <a href="profile">My Account</a>
                <a href="showCart">View Cart</a>
                <a href="contact">Help </a>
            </div>
            <div className="col install">
               
                </div>
            
        </footer>
       </> 
    );
};

export default UserAccount;