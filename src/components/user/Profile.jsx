import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Profile() {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className="container text-light text-center my-5">
        <div className="row align-items-center">
          <h1 className="text-light">Welcome, {user?.name}</h1>
          <hr />
          <h3 className="text-info">{user?.email}</h3>
        </div>
      </div>
    </>
  );
}

export default Profile;
