import { useEffect, useState } from "react";
import axios from "axios";

export default function Grain() {
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

  const fruits = myData.filter((item) => item.category === "grain");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Grains List</h2>
      {fruits.length === 0 ? (
        <p>No Grains found</p>
      ) : (
        <div className="grid gap-4">
          {fruits.map((grain) => (
            <div key={grain.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{grain.name}</h3>
              <p>Category: {grain.category}</p>
              <p>Price: {grain.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
