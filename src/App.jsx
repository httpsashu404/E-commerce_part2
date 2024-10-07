import ShowProduct from "./components/product/ShowProduct";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/Navbar";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from "./components/Cart";
import Address from "./components/Address";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OderConfirmation";
import SearchProduct from "./components/product/SearchProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const {}=useContext(AppContext)
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ShowProduct />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route
            path="/product/search/:term"
            element={<SearchProduct />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/shiping" element={<Address />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/orderconfirmation"
            element={<OrderConfirmation />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
