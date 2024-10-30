import { useContext } from "react";
import AppContext from "../../context/AppContext";

function AllUser() {
  const { allUser } = useContext(AppContext);
  return (
    <>
      <div className="container text-center text-light mt-2">
        <h1 className="">All Users</h1>
        <hr />
        <div className="row justify-content-center">
          {allUser?.map((user) => (
            <div
              key={user._id}
              className="col col-sm-6 col-lg-4 col-xl-3 py-2 m-1 rounded"
              style={{ backgroundColor: "#294a70", width: "max-content" }}
            >
              <div>
                <b>{user?.name}</b>
                <br />
                <span>Mo : {user?.phone}</span>
                <br />
                <span>Id : {user?._id}</span>
                <br />
                <span>{user?.email}</span>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllUser;
