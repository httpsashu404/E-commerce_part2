import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import AppContext from "../../context/AppContext";
import RelatedProduct from "./RelatedProduct";

function ProductDetail() {
  const { url, addToCart } = useContext(AppContext);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log("FetchProduct : ", api.data.products);
      setProduct(api.data.products);
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      <div
        style={{ backgroundColor: "#294a70" }}
        className="container w-75 w-sm-100 text-light ProductDetail text-center mt-5 rounded"
      >
        <div className="row justify-content-between align-items-center py-3 m-1">
          <div className="left col-sm-3 mb-3">
            <img
              className="image"
              src={product?.imgSrc}
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
            <h4>{product?.title}</h4>
            <p>
              <>{product?.description}</>
            </p> 
            <div className="justify-content-between">
              <button
                className="btn btn-sm btn-primary mx-1"
                style={{ fontWeight: "bold" }}
              >
                ₹ {product?.price}/-
              </button>
              <button
                onClick={() =>
                  addToCart(
                    product?._id,
                    product.title,
                    product.price / product.qty,
                    1,
                    product.imgSrc
                  )
                }
                className="btn btn-sm btn-warning mx-1"
                style={{ fontWeight: "bold" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct category={product?.category} />
    </>
  );
}

export default ProductDetail;
