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
        
    }
     return (
        <>
        
        <section id="hero">
        <h4>Organic Vegetables</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <button onClick={goShop}>Shop Now</button>
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
    )
}