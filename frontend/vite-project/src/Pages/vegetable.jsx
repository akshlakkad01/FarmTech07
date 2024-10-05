import { useEffect, useState } from "react";
import axios from "axios";

export default function Vegetable() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const fruits = myData.filter((item) => item.category === "vegetable");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Vegetables List</h2>
      {fruits.length === 0 ? (
        <p>No Vegetables found</p>
      ) : (
        <div className="grid gap-4">
          {fruits.map((vegetable) => (
            <div key={vegetable.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{vegetable.name}</h3>
              <p>Category: {vegetable.category}</p>
              <p>Price: {vegetable.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
