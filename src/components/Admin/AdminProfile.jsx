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
          <h6 className="text-info">
            <b>Name : </b>
            {admin?.name}
          </h6>
          <h6 className="text-info">
            <b>Mo : </b>
            {admin?.phone}
          </h6>
          <h6 className="text-info">
            <b>E-mail : </b>
            {admin?.email}
          </h6>
          <h6 className="text-info">
            <b>Id</b> : {admin?._id}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Profile;
