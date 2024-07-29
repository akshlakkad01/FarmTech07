
 import Login from './Pages/login.jsx'

import { Routes ,Route, BrowserRouter } from "react-router-dom";
import ProductShow from './Pages/productShow.jsx'
import AddProduct from './Pages/addProduct.jsx'
import ShowCart from './Pages/showCart.jsx'
import Layout from './Pages/layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/index.jsx'



function App() {

  return (
  
    <>
      <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/singup" element={<Login />}/>
        <Route path="/" element={<Index />} />
        <Route path="/showProduct" element={<ProductShow/>} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/showCart" element={<ShowCart />} />
      </Routes>
      </BrowserRouter>
      
     </>
  ) 
}

export default App
