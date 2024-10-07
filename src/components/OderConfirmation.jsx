import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";

function OderConfirmation() {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  return (
    <>
      <div className="container text-light my-3">
        <h1 className="text-center">Your order has been confirm,</h1>
        <h4 className="text-center">it will delivered in 7 days</h4>
        <table className="table table-responsive table-sm table-bordered border-light  text-light text-center">
          <thead>
            <tr className="bg-dark">
              <th>Order items</th>
              <th>Shiping Address & order details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ShowOrderProduct items={latestOrder?.orderItems} />
              </td>
              <td>
                <hr />
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <b>Order-Id : </b>
                    {latestOrder?.orderId}
                  </li>
                  <li>
                    <b>Payment-Id : </b>
                    {latestOrder?.paymentId}
                  </li>
                  <li>
                    <b>Payment Status : </b>
                    {latestOrder?.payStatus}
                  </li>
                  <li>
                    <b>Name : </b>
                    {latestOrder?.userShiping?.fullName}
                  </li>
                  <li>
                    <b>City : </b>
                    {latestOrder?.userShiping?.city}
                  </li>
                  <li>
                    <b>State : </b>
                    {latestOrder?.userShiping?.state}
                  </li>
                  <li>
                    <b>Country : </b>
                    {latestOrder?.userShiping?.country}
                  </li>
                  <li>
                    <b>Pincode : </b>
                    {latestOrder?.userShiping?.pincode}
                  </li>
                  <li>
                    <b>Phone : </b>
                    {latestOrder?.userShiping?.phoneNumber}
                  </li>
                  <li>
                    <b>Address : </b>
                    {latestOrder?.userShiping?.address}
                  </li>
                </ul>
                <hr />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div style={{ textAlign: "center" }} className="container my-3">
        <button className="btn btn-secondary">
          <b>Payment Now</b>
        </button>
      </div> */}
    </>
  );
}

export default OderConfirmation;
