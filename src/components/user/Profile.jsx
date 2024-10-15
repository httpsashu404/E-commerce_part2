import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Profile() {
  const { user, userOrder } = useContext(AppContext);

  return (
    <>
      <div className="container text-light text-center my-5">
        <div className="row align-items-center">
          <h1 className="text-light">Welcome, {user?.name}</h1>
          <hr />
          <h3 className="text-info">{user?.email}</h3>
          <h5 className="text-info">
            <b>Id</b> : {user?._id}
          </h5>
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
