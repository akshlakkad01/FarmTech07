import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const styles = `
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-content {
    padding: 1rem;
  }
  
  .product-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .product-category {
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .product-price {
    font-size: 1.125rem;
    font-weight: bold;
    color: #2c7a2c;
  }
  
  .product-footer {
    background-color: #f5f5f5;
    padding: 1rem;
  }
  
  .buy-button {
    width: 100%;
    padding: 0.5rem;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .buy-button:hover {
    background-color: #2980b9;
  }
  
  .no-products {
    text-align: center;
    color: #666;
  }
`;

export default function ProductShow() {
  const [myData, setData] = useState([]);
  const navigate = useNavigate();

  const firstCookie = Cookies.get("cookie");
  const secondCookie = Cookies.get("loginCookie");

  const addInCart = async (item) => {
    alert("Product added to the cart");
    const data = {
      cart_id: item.id,
      cart_name: item.name,
      cart_category: item.category,
      cart_price: item.price,
    };
    await axios.post("http://localhost:8080/addCart", data);
  };

  useEffect(() => {
    if (!(firstCookie || secondCookie)) {
      navigate("/signup");
    }

    const res = axios
      .get("http://localhost:8080/showPro")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [firstCookie, secondCookie, navigate]);

  return (
    <>
      <style>{styles}</style>

      <div className="container">
        <h1>All Products</h1>
        <a href="/fruit">Fruits</a>
        <br></br>
        <a href="/vegetable">Vegetables</a>
        <br></br>
        <a href="/grain">Grains</a>
      </div>
    </>
  );
}
