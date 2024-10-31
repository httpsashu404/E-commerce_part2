import { useContext } from "react";
import AppContext from "../../context/AppContext";
import OrderTable from "../OrderTable.jsx";

function AllOrder() {
  const { allOrder } = useContext(AppContext);
  // console.log("My orders : ", allOrder);
  return (
    <>
      <div className="container text-light mt-2">
        <h1 className=" text-center">All Orders</h1>
        <p className="text-center text-info">Now working on this page for adjust items</p>
        <hr />
        <div className="row justify-content-centr">
          <table className="table table-bordered">
            <thead className="bg-dark text-light text-center">
              <th>Items</th>
              <th>Address</th>
            </thead>
            <tbody>
              <tr className="mt-2 justify-content-between">
                <td>
                  <OrderTable />
                </td>
                <td>
                  {allOrder?.map((address) => (
                    <div key={address?._id} className="text-light"><hr />
                      <ul>
                        <li>
                          <b>Name : </b>
                          {address?.userShiping?.fullName}
                        </li>
                        <li>
                          <b>City : </b>
                          {address?.userShiping?.city}
                        </li>
                        <li>
                          <b>State : </b>
                          {address?.userShiping?.state}
                        </li>
                        <li>
                          <b>Country : </b>
                          {address?.userShiping?.country}
                        </li>
                        <li>
                          <b>Phone : </b>
                          {address?.userShiping?.phoneNumber}
                        </li>
                        <li>
                          <b>Pin Code : </b>
                          {address?.userShiping?.pincode}
                        </li>
                        <li>
                          <b>Address : </b>
                          {address?.userShiping?.address}
                        </li>
                      </ul>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllOrder;
