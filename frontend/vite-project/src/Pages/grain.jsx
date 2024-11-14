import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import "./grain.css";

export default function Grain() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function addToCart(grain) {
    const data = {
      item: grain.name,
      category: grain.category,
      price: grain.price,
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

  const grains = myData.filter((item) => item.category === "grain");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Grains List</h2>
      {grains.length === 0 ? (
        <p>No Grains found</p>
      ) : (
        <div className="grid gap-4">
          {grains.map((grain) => (
            <div key={grain.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{grain.name}</h3>
              <p>Category: {grain.category}</p>
              <p>Price: {grain.price}</p>
              <button
                onClick={() => addToCart(grain)}
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
