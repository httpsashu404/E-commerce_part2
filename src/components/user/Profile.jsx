import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Profile() {
  const { user, userOrder } = useContext(AppContext);

  return (
    <>
      <div className="container text-light text-center my-5">
        <div className="row align-items-center">
          <h4 className="text-light">Welcome, {user?.name}</h4>
          <hr />
          <h className="text-info"><b>Mo : </b>{user?.phone}</h>
          <h className="text-info"><b>E-mail : </b>{user?.email}</h>
          <h className="text-info">
            <b>Id</b> : {user?._id}
          </h>
        </div>

        {/* Table order progress continue.. */}
        {/* <table className="table table-responsive table-sm table-bordered border-light text-light text-center">
          <thead>
            <tr className="bg-dark">
              <th>Product's Details</th>
              <th>Shiping Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
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
        </table> */}
      </div>
    </>
  );
}

export default Profile;
