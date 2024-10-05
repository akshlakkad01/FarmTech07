import { useEffect, useState } from "react";
import axios from "axios";

export default function Vegetable() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function addToCart(vegetable) {
    const data = {
      item: vegetable.name,
      category: vegetable.category,
      price: vegetable.price,
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

  const Vegetables = myData.filter((item) => item.category === "vegetable");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Vegetables List</h2>
      {Vegetables.length === 0 ? (
        <p>No Vegetables found</p>
      ) : (
        <div className="grid gap-4">
          {Vegetables.map((vegetable) => (
            <div key={vegetable.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{vegetable.name}</h3>
              <p>Category: {vegetable.category}</p>
              <p>Price: {vegetable.price}</p>
              <button
                onClick={() => addToCart(vegetable)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
