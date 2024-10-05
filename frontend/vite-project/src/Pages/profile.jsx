import React from 'react';
import './profile.css'; // Import the CSS file

const UserAccount = () => {
    return (
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
    );
};

export default UserAccount;