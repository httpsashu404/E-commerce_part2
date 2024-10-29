import ShowProduct from "./components/product/ShowProduct";
import ProductDetail from "./components/product/ProductDetail";
import AddProduct from "./components/Admin/AddProduct";
import EditProduct from "./components/Admin/EditProduct";
import AllOrder from "./components/Admin/AllOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./components/Admin/Admin";
import PassForget from "./components/Admin/PassForgt";
import Dashboard from "./components/Admin/Dashboard";
import AdminProfile from "./components/Admin/AdminProfile";
import AllUser from "./components/Admin/AllUser";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import ForgetPass from "./components/user/ForgetPass";
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
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/editProduct/:id" element={<EditProduct />}></Route>
          <Route
            path="/product/search/:term"
            element={<SearchProduct />}
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/passForget" element={<PassForget />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/adminProfile" element={<AdminProfile />}></Route>
          <Route path="/allusers" element={<AllUser />}></Route>
          <Route path="/allorders" element={<AllOrder />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgetPass" element={<ForgetPass />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/shiping" element={<Address />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/orderconfirmation"
            element={<OrderConfirmation />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
