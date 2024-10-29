import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { addProduct } = useContext(AppContext);
  const navigate = useNavigate();
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
  
  // Add product by admin
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await addProduct(
      title,
      description,
      price,
      category,
      qty,
      imgSrc
    );
    if (result) {
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
              <b className="border-bottom">Add Product</b>
            </legend>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                placeholder="Product name/title"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                placeholder="Product full description"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={onChangeHandler}
                placeholder="Product price"
                required
              />
            </div>
            <div className="mb-3">
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={onChangeHandler}
              >
                <option>Select categories</option>
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
                onChange={onChangeHandler}
                placeholder="Product image url"
                required
              />
            </div>
            <div className="row justify-content-center py-2">
              <button type="submit" className="btn btn-primary col-5">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
