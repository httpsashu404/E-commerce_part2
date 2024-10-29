import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

function EditProduct() {
  const { url, editProduct } = useContext(AppContext);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [formData, setformData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imgSrc: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { title, description, price, category, qty, imgSrc } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await editProduct(
      title,
      description,
      price,
      category,
      qty,
      imgSrc
    );
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
                required
                disabled
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                name="description"
                value={formData?.description}
                defaultValue={product?.description}
                onChange={onChangeHandler}
                placeholder={product?.description}
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                defaultValue={product?.price}
                onChange={onChangeHandler}
                placeholder={`₹ ${product?.price}/-`}
              />
            </div>
            <div className="mb-3">
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={onChangeHandler}
                disabled
              >
                <option>{product?.category}</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Airbuds</option>
                <option>Headphone</option>
                <option>Camera</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="imgSrc"
                value={formData.imgSrc}
                defaultValue={product?.imgSrc}
                onChange={onChangeHandler}
                placeholder={product?.imgSrc}
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
