import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AppState(props) {
  // const url = "http://localhost:5000/api";
  const url = "https://e-commerce-p0fh.onrender.com/api";

  const [products, setProducts] = useState([]);
  const [token, settoken] = useState([]);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [filterData, setfilterData] = useState([]);
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log(api.data.products);

      setProducts(api.data.products);
      setfilterData(api.data.products);
      userProfile();
    };
    fetchProduct();
    userCart();
    getAddress();
    user_Order();
  }, [token, reload]);

  useEffect(() => {
    let Istoken = localStorage.getItem("token");
    if (Istoken) {
      settoken(Istoken);
      setisAuthenticated(true);
    }
  }, []);

  // register user
  const register = async (name, email, phone, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, phone, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    // console.log(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data;
  };

  // Admin login
  const adminLogin = async (email, password) => {
    const api = await axios.post(
      `${url}/admin/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    console.log("admin login : ", api);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    settoken(api.data.token);
    setisAuthenticated(true);
    localStorage.setItem("token", api.data.token);
    return api.data;
  };

  // User login
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    console.log(api.data.message);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    settoken(api.data.token);
    setisAuthenticated(true);
    localStorage.setItem("token", api.data.token);
    return api.data;
  };

  // User forget user password
  const forgetPass = async (email, password) => {
    const api = await axios.put(
      `${url}/user/forgetPass`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    // console.log(api.data)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // User forget admin password
  const forgetAdminPass = async (email, password) => {
    const api = await axios.put(
      `${url}/admin/forgetPass`,
      { email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    console.log(api)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // user logout
  const logout = () => {
    setisAuthenticated(false);
    settoken(" ");
    localStorage.removeItem("token");
    toast.success("Logout successful", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // User profile
  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: {
        "Content-Type": "Application/json",
        auth: token,
      },
      withCredentials: true,
    });
    // console.log(api.data.user)
    setUser(api.data.user);
  };

  // Add to cart
  const addToCart = async (productId, title, price, qty, imgSrc) => {
    const api = await axios.post(
      `${url}/cart/add`,
      { productId, title, price, qty, imgSrc },
      {
        headers: {
          "Content-Type": "Application/json",
          auth: token,
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
    // console.log(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // user cart
  const userCart = async () => {
    const api = await axios.get(`${url}/cart/user`, {
      headers: {
        "Content-Type": "Application/json",
        auth: token,
      },
      withCredentials: true,
    });
    setCart(api.data.cart);
    // console.log(api.data.cart)
  };

  // qty decrease
  const decreaseQty = async (productId, qty) => {
    const api = await axios.post(
      `${url}/cart/--qty`,
      { productId, qty },
      {
        headers: {
          "Content-Type": "Application/json",
          auth: token,
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
    // console.log(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // remove from cart //
  const removeFromCart = async (productId) => {
    const api = await axios.delete(`${url}/cart/remove/${productId}`, {
      headers: {
        "Content-Type": "Application/json",
        auth: token,
      },
      withCredentials: true,
    });
    setReload(!reload);
    // console.log("Remove item from cart", api);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // clear Cart
  const clearCart = async () => {
    const api = await axios.delete(`${url}/cart/clear/`, {
      headers: {
        "Content-Type": "Application/json",
        auth: token,
      },
      withCredentials: true,
    });
    setReload(!reload);
    // console.log("Remove item from cart", api);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // add Shiping addressed
  const shipingAddress = async (
    fullName,
    city,
    state,
    country,
    pincode,
    phoneNumber,
    address
  ) => {
    const api = await axios.post(
      `${url}/address/add`,
      { fullName, city, state, country, pincode, phoneNumber, address },
      {
        headers: {
          "Content-Type": "Application/json",
          auth: token,
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
    // console.log("Address : ", api.data.message);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return api.data;
  };

  // Get old address
  const getAddress = async () => {
    const api = await axios.get(`${url}/address/get`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    // console.log("User address", api.data.userAddress);
    setUserAddress(api.data.userAddress);
  };

  // Get user order
  const user_Order = async () => {
    const api = await axios.get(`${url}/payment/userorder`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    return setUserOrder(api.data);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        register,
        login,
        adminLogin,
        url,
        token,
        setisAuthenticated,
        isAuthenticated,
        filterData,
        setfilterData,
        logout,
        user,
        addToCart,
        cart,
        decreaseQty,
        removeFromCart,
        clearCart,
        shipingAddress,
        userAddress,
        userOrder,
        forgetPass,
        forgetAdminPass,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
