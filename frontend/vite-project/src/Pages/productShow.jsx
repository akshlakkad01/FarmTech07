import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./productShow.css";

export default function ProductShow() {
  const [myData, setData] = useState([]);
  const navigate = useNavigate();

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
    if (!document.cookie) {
      navigate("/signup");
    }
    axios.get("http://localhost:8080/showPro").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <header className="header">
        <h1>All Products</h1>
      </header>
      <div className="productGrid">
        {myData.map((item) => {
          const { id, name, category, price } = item;
          return (
            <div className="productCard" key={id}>
              <div className="productCardHeader">
                <h2>{name}</h2>
                <span className="productCategory">{category}</span>
              </div>
              <div className="productDetails">
                <p>ID: {id}</p>
                <p>Price: {price}/kg</p>
              </div>
              <button onClick={() => addInCart(item)} className="buyButton">
                Buy
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
