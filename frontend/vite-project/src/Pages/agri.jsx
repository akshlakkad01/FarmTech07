import { useNavigate } from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DrawerAppBar from "./navBar";

import "./agri.css"
import { red } from "@mui/material/colors";
export default function Agri() {
    const nevigate = useNavigate();
    function showProduct() {
        nevigate("/product");
    }
    return(
        <>
{/*         
         <div style={{backgroundColor: red}} className="navBar">
            <a >home</a>
            <a onClick={showProduct}>product</a>
            <a >about</a>
        </div> 
         <AddShoppingCartIcon />
        <BasicCard /> 
        <div className="footer">

        </div> */}
        <DrawerAppBar />
        </>
    )
}