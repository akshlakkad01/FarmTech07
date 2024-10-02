import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'; 

const About = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h1>#KnowUs</h1>
      </section>

      <section id="about-head" className="section-p1">
        <img src={aboutImage} alt="About Us" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            At our core, we are dedicated to bridging the gap between the farm and your table, ensuring you 
            have access to the freshest and highest quality produce. Our wide range of offerings includes 
            fruits, vegetables, grains, and other farm-fresh products, all carefully selected to meet your 
            culinary needs. We pride ourselves on our commitment to sustainable farming practices and our 
            unwavering dedication to delivering the best of nature right to your doorstep.
          </p>
          
          <br /><br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="7" width="100%">
            At our core, we are dedicated to bridging the gap between the farm and your table, ensuring you have access to the freshest and highest quality produce. Our wide range of offerings includes fruits, vegetables, grains, and other farm-fresh products, all carefully selected to meet your culinary needs. We pride ourselves on our commitment to sustainable farming practices and our unwavering dedication to delivering the best of nature right to your doorstep.
          </marquee>
        </div>
      </section>
      
      <section id="feature" className="section-p1">
        {[
          { img: freeShipping, text: "Free Shipping" },
          { img: onlineOrder, text: "Online Order" },
          { img: saveMoney, text: "Save Money" },
          { img: happySell, text: "Happy Sell" },
          { img: support, text: "24/7 Support" },
        ].map((feature, index) => (
          <div key={index} className="fe-box">
            <img src={feature.img} alt={feature.text} />
            <h6>{feature.text}</h6>
          </div>
        ))}
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For New Customers</h4>  
        </div>
        <div className="form">
          <button className="normal">Sign Up</button> 
        </div>
      </section>

      <footer id="footer" className="section-p1">
            <div className="logofooter">
            <img className="logo" src="./Farmtech/img1/logo.png" alt=""></img>
            </div>
            <div className="col">
                <h4>Contact</h4>
                <p><strong>Address:</strong>changa,Anand</p>
                <p><strong>Phone:</strong>+91 7984316011</p>
                <p><strong>Hours:</strong>24/7</p>
                <h4>Follow Us</h4>
                {/* <div className="follow">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div> */}
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign in</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Help</a>
            </div>
            <div className="col install">
               
                </div>
            
        </footer>
    </>
  );
};

export default About;