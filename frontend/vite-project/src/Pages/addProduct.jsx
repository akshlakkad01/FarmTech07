import { useState } from "react";
import product from "./product";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Login from "./login";
export default function AddProduct() {

    const [id , setID] = useState(0)
    const [name,setName] = useState("");
    const [catagory,setCatagory] = useState("");
    const [price,setPrice] = useState(0);
    const navigate = useNavigate();

    const handleSave = async(e) => {
        e.preventDefault();
        const data = {
            product_id : id,
            product_name: name,
            product_catagory: catagory,
            product_price: +price
        }
        
        const res = await axios.post("http://localhost:8080/add",data)
        .catch((err)=>{
            console.log(err);
        })

        console.log(res.data);
        setID(0);
        setName("");
        setCatagory("");
        setPrice(0);
        navigate("/")
    }

    return (
        
        <div>
            {/* <Login /> */}
            <form>
                id :-
                <input type="number" value={id} onChange={(e)=>setID(e.target.value)} />
                Name:-
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                category:-
                <input type="text" value={catagory} onChange={(e)=>setCatagory(e.target.value)}/>
                <br></br>
                Price:-
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <br></br>

                <button onClick={handleSave}>Submit</button>
            </form>
        </div>
       
    )
}