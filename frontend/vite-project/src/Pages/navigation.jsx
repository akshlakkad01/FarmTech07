// import { Link,Outlet } from "react-router-dom"
import "./style.css"
export default function Navigation() {
    return (
        <section id="header">
            <a href="/"><img src="./Farmtech/img1/logo.png" className="logo" alt=""></img></a>
        <div>
            <ul id="navbar">
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/showProduct">Shop</a></li>
                <li><a href="/addProduct">Add Product</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="/showCart"> <i className="bi bi-bag-fill"></i></a></li>
                <a href="#"id="close"><i className="fa-solid fa-xmark"></i></a>
            </ul>
         </div>
         <div id="mobile">
            <a href="#"><i className="fa fa-bag-shopping"></i></a>
            <i id="bar" className="fa-solid fa-bars"></i>
         </div>
        </section>
    )
}