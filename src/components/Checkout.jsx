import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setprice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
      setprice(price);
      setQty(qty);
    }
  }, [cart]);

  const handlePayment = async () => {
    try {
      const orderRespons = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty: qty,
        certItem: cart?.items,
        userShiping: userAddress,
        userId: user?._id,
      });
      // console.log("Response", orderRespons);

      const { orderId, amount: orderAmount } = orderRespons.data;
      var options = {
        key: "rzp_test_wwLAAIe6dXe2KX",
        amount: orderAmount * 100,
        currency: "INR",
        name: "ZenMart",
        description: "ZenMart",
        image: "https://github.com/httpsashu404/E-commerce_part2/blob/main/image/logo.png?raw=true",
        order_id: orderId,

        handler: async function (response) {
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItems: cart?.items,
            userId: user._id,
            userShiping: userAddress,
          };

          const api = await axios.post(
            `${url}/payment/verify-payment`,
            paymentData
          );
          // console.log(`Rezorpay Respons: `, api.data);

          if (api.data.success) {
            clearCart();
            navigate("/orderconfirmation");
          }
        },
        prefill: {
          name: "ZenMart",
          email: "zenmartbyashu@gmail.com",
          contact: "7763992074",
        },
        notes: {
          address: "Sasaram, Gaurakshani, Durga mandir",
        },
        theme: {
          color: "#294a70",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1
          className="text-center py-1 my-3 text-light"
        >
          Order summary
        </h1>

        <table className="table table-responsive table-sm table-bordered border-light text-light text-center">
          <thead>
            <tr className="bg-dark">
              <th>Product's Details</th>
              <th>Shiping Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TableProduct cart={cart} />
              </td>
              <td>
                <hr />
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <b>Name : </b>
                    {userAddress?.fullName}
                  </li>
                  <li>
                    <b>City : </b>
                    {userAddress?.city}
                  </li>
                  <li>
                    <b>State : </b>
                    {userAddress?.state}
                  </li>
                  <li>
                    <b>Country : </b>
                    {userAddress?.country}
                  </li>
                  <li>
                    <b>Pincode : </b>
                    {userAddress?.pincode}
                  </li>
                  <li>
                    <b>Phone : </b>
                    {userAddress?.phoneNumber}
                  </li>
                  <li>
                    <b>Address : </b>
                    {userAddress?.address}
                  </li>
                </ul>
                <hr />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }} className="container my-3">
        <button className="btn btn-warning" onClick={handlePayment}>
          <b>Payment Now</b>
        </button>
      </div>
    </>
  );
}

export default Checkout;
