import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import AppContext from "../../context/AppContext";

function EditProduct() {
  const { url } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log("FetchProduct : ", api.data.products);
      setProduct(api.data.products);
    };
    getProduct();
  }, [id]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await axios.put(`${url}/product/${id}`, product);
    // console.log("Update Product", api);
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
    if (api.data.success) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <form
            style={{ backgroundColor: "#294a70" }}
            autoComplete="off"
            onSubmit={submitHandler}
            className="
          col-12 col-sm-10 col-md-8 col-lg-5 m-5 p-3 text-light shadow border rounded
          "
          >
            <legend className="text-center mb-4">
              <b className="border-bottom">Edit Product</b>
            </legend>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                value={product?.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                name="description"
                value={product?.description}
                placeholder={product?.description}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="price"
                value={product?.price}
                placeholder={`₹ ${product?.price}/-`}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="category"
                value={product?.category}
                onChange={onChangeHandler}
              >
                <option>{product?.category}</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Airbuds</option>
                <option>Headphone</option>
                <option>Camera</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                name="imgSrc"
                value={product?.imgSrc}
                placeholder={product?.imgSrc}
                onChange={onChangeHandler}
              />
            </div>
            <div className="row justify-content-center py-2">
              <button type="submit" className="btn btn-primary col-5">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
