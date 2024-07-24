import { useNavigate } from "react-router-dom"
import ProductShow from "./productShow"
export default function product() {
    const nevigate = useNavigate();
    function addItem() {
        nevigate("/addProduct");
    }
    return (
    <div>
        <h3>Add Prodcts</h3>
        <button onClick={addItem}>Add</button>
        <ProductShow />
    </div>)
}