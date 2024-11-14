import { useEffect, useState } from "react";
import axios from "axios";
import "./fruit.css";

export default function Fruit() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function addToCart(fruit) {
    const data = {
      item: fruit.name,
      category: fruit.category,
      price: fruit.price,
    };

    try {
      const res = await axios.post("http://localhost:8080/addCart", data, {
        withCredentials: true, // Important for sending cookies
      });
      console.log("Item added to cart successfully");
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/showPro")
      .then((response) => {
        setMyData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const fruits = myData.filter((item) => item.category === "fruit");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Fruits List</h2>
      {fruits.length === 0 ? (
        <p>No fruits found</p>
      ) : (
        <div className="grid gap-4">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{fruit.name}</h3>
              <p>Category: {fruit.category}</p>
              <p>Price: {fruit.price}</p>
              <button
                onClick={() => addToCart(fruit)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
