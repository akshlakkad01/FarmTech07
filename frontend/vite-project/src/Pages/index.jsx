import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css"


export default function Index() {

    const navigate = useNavigate();
    function goShop() {
        navigate("/showProduct")
        c
    }
     return (
        <>
        
        <section id="hero">
        <h4>Organic Vegetables</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <button onClick={goShop}>Buy Now</button>
        </section>
        
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src="./Farmtech/img/features/f1.png"></img>
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
                <img src="./Farmtech/img/features/f2.png"></img>
                <h6>Online Order</h6>
            </div>
            <div className="fe-box">
                <img src="./Farmtech/img/features/f3.png"></img>
                <h6>Save Money</h6>
            </div>
            
            <div className="fe-box">
                <img src="./Farmtech/img/features/f5.png"></img>
                <h6>Happy Sell</h6>
            </div>
            <div className="fe-box">
                <img src="./Farmtech/img/features/f6.png"></img>
                <h6>24/7 Support</h6>
            </div>
        </section>
        {/* <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
              <h4>Sign Up</h4>  
              <p>To purchase organic agri products</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your email address"></input>
                <button className="normal">Sign Up</button> 
            </div>
        </section> */}

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
                <div className="follow">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
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
    )
}