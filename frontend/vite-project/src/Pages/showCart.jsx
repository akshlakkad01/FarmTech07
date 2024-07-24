import { useEffect, useState } from "react"
import './productShow.css';
import axios from "axios";

export default function ShowCart() {
    const [myData , setData] = useState([])
    useEffect(()=>
    {
        axios.get("http://localhost:8080/showCart")
            .then((res)=>{
                setData(res.data);
            })
    })
    return (
        <>
            {
                myData.map((pro)=>
                {
                    let {id,item,category,price} = pro;
                    return (
                        <div className="productList">
                            <p>
                            id :- {id} <br></br>
                            Name :-  {item} <br></br>
                            Category :-   {category} <br></br>
                            Price :-  {price}/kg <br></br>
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}