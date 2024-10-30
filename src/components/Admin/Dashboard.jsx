import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { filterData, url, token } = useContext(AppContext);
  const [reload, setReload] = useState(false);

  // Delete Product by admin
  const handleDelete = async (id) => {
    const result = confirm("Are your sure delete product");
    if (result) {
      const api = await axios.delete(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
          adminAuth: token,
        },
        withCredentials: true,
      });
      setReload(!reload);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.warning("Delete request cancelled", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
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
                <button
                  className="btn btn-sm btn-danger mx-1"
                  style={{ fontWeight: "bold" }}
                  onClick={() => handleDelete(filterData._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
