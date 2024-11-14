import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h1>#let's_talk</h1>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div className="contact-info">
            <li>
              <i className="far fa-map"></i>
              <p>Anand, Gujarat, India</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>FarmTech@support.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+91 1234567890</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>24/7 customer support</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.256989712045!2d138.56776215121883!3d-35.025300280256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d091d6e98d9f%3A0xf03365545bac8a0!2sFlinders%20University!5e0!3m2!1sen!2sau!4v1673494660409!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span><h2>Massage for sell your product on our platform</h2></span>
          <h5>We love to hear from you</h5>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            {/* <img src="./img/people/1.png" alt="" /> */}
            <p>
              <span>Krish Kadchhi</span> Senior Marketing Manager <br />
              Phone: +91 9909987990 <br />
              Email: krishkadchhi001@gmail.com
            </p>
          </div>
          <div>
            {/* <img src="./img1/Profile.jpg" alt="" /> */}
            <p>
              <span>Akshay Lakkad</span> Senior Marketing Manager <br />
              Phone: +91 9809897096 <br />
              Email: akshaylakkad07@gmail.com
            </p>
          </div>
          <div>
            {/* <img src="./img1/user.jpg" alt="" /> */}
            <p>
              <span>Nirmal Kaneriya</span> Senior Marketing Manager <br />
              Phone: +91 9709795097 <br />
              Email: nirmalkaneriya99@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For New Customers</h4>
        </div>
        <div className="form">
          <button className="normal">Sign Up</button>
        </div>
      </section> */}

<footer id="footer" className="section-p1">
            {/* <div className="logofooter">
            <img className="logo" src="./Farmtech/img1/logo.png" alt=""></img>
            </div> */}
            <div className="col">
                {/* <h4>Contact</h4> */}
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
                {/* <h4>About</h4> */}
                <a href="#">About us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col">
                {/* <h4>My Account</h4> */}
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

export default Contact;