import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import "./addProduct.css";

export default function AddProduct() {
    const [id, setID] = useState(0);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const firstCookie = Cookies.get('cookie');
    const secondCookie = Cookies.get('loginCookie');

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            product_id: id,
            product_name: name,
            product_category: category,
            product_price: +price
        };
            try {
                const res = await axios.post("http://localhost:8080/add", data);
                console.log(res.data);
                setID(0);
                setName("");
                setCategory("");
                setPrice(0);
                navigate("/");
            } catch (err) {
                console.error("Error saving the product:", err);
            }
    };
if (!(firstCookie || secondCookie)) {
    return <Navigate to="/signup" />;
}
    return (
        <div className="addProduct">
            <form className="addpro" onSubmit={handleSave}>
                <div className="form-group">
                    <label>ID:</label>
                    <input 
                        type="number" 
                        value={id} 
                        onChange={(e) => setID(Number(e.target.value))} 
                    />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(Number(e.target.value))} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
