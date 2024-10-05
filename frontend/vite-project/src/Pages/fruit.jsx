import { useEffect, useState } from "react";
import axios from "axios";

export default function Fruit() {
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
