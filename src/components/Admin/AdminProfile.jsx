import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Profile() {
  const { admin } = useContext(AppContext);

  return (
    <>
      <div className="container text-light text-center my-5">
        <div className="row align-items-center">
          <h2 className="text-light">Welcome, Administrator Ji</h2>
          <hr />
          <h5 className="text-info">
            <b>Name : </b>
            {admin?.name}
          </h5>
          <h5 className="text-info">
            <b>Mo : </b>
            {admin?.phone}
          </h5>
          <h5 className="text-info">
            <b>E-mail : </b>
            {admin?.email}
          </h5>
          <h5 className="text-info">
            <b>Id</b> : {admin?._id}
          </h5>
        </div>
      </div>
    </>
  );
}

export default Profile;
