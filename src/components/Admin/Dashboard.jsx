import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { filterData } = useContext(AppContext);
  return (
    <>
      {filterData?.map((filterData) => (
        <div
          key={filterData._id}
          style={{ backgroundColor: "#294a70" }}
          className="container w-75 w-sm-100 text-light ProductDetail text-center mt-2 rounded"
        >
          <div className="row justify-content-between align-items-center py-3 m-1">
            <div className="left col-sm-3 mb-3">
              <img
                className="image"
                src={filterData?.imgSrc}
                alt="image"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "10px",
                  border: ".5px solid silver",
                }}
              />
            </div>
            <div
              className="right col-sm-7"
              style={{ display: "grid", alignSelf: "center" }}
            >
              <h4>{filterData?.title}</h4>
              <p>
                <>{filterData?.description}</> <br />
                <b>₹ {filterData?.price}/-</b>
              </p>
              <div className="justify-content-between">
                <Link
                  to={`/editProduct/${filterData._id}`}
                  className="btn btn-sm btn-warning mx-1"
                  style={{ fontWeight: "bold" }}
                >
                  Edit
                </Link>
                <Link
                  to={`/deleteProduct/${filterData._id}`}
                  className="btn btn-sm btn-danger mx-1"
                  style={{ fontWeight: "bold" }}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
