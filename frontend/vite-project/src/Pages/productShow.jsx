import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import "./productShow.css";

export default function ProductShow() {
  const [myData, setData] = useState([]);
  const navigate = useNavigate();

  const firstCookie = Cookies.get('cookie');
  const secondCookie = Cookies.get('loginCookie');

  const addInCart = async (item) => {
    alert("Product added to the cart");
    const data = {
      cart_id: item.id,
      cart_name: item.name,
      cart_category: item.category,
      cart_price: item.price
    };
    await axios.post("http://localhost:8080/addCart", data);
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8080/deleteProduct/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(id);
  };

  useEffect(() => {
    if (!(firstCookie || secondCookie)) {
      navigate("/signup");
    }

    axios
      .get("http://localhost:8080/showPro")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [firstCookie, secondCookie, navigate]);

  return (
    <>
      <h1>All Products</h1>
      {myData.length > 0 ? (
        myData.map((item) => {
          const { id, name, category, price } = item;
          return (
            <div className="productList" key={id}>
              <p>
                ID: {id} <br />
                Name: {name} <br />
                Category: {category} <br />
                Price: {price}/kg <br />
                <button onClick={() => addInCart(item)}>Buy</button>
              </p>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </>
  );
}
