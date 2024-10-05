import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function goToProfile() {
        navigate("/profile");
    }

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header className="header">
            <h2 className="logo">FarmTech</h2>
            <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/showProduct" className={location.pathname === "/showProduct" ? "active" : ""}>Shop</Link></li>
                    <li><Link to="/addProduct" className={location.pathname === "/addProduct" ? "active" : ""}>Add Product</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                    <li>
                        <Link to="/showCart" className={location.pathname === "/showCart" ? "active" : ""}>
                            <img src="/img1/shopping-cart.png" alt="Cart" className="icon cart-icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" onClick={goToProfile} className={location.pathname === "/profile" ? "active" : ""}>
                            <img src="/img1/user.png" alt="Profile" className="icon profile-icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={toggleMobileMenu}>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </header>
    );
}