import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
// import AppContext from "../../context/AppContext";
import RelatedProduct from "./RelatedProduct";

function ProductDetail() {
  // const { addToCart } = useContext(AppContext);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const url = "http://localhost:5000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log(api.data.products);
      setProduct(api.data.products);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="container text-light ProductDetail text-center mt-5">
        <div className="row ">
          <div className="left col-12 col-sm-6 mb-3">
            <img
              className="image"
              src={product?.imgSrc}
              alt="image"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "10px",
                border: ".5px solid silver",
              }}
            />
          </div>
          <div
            className="right col-12 col-sm-6"
            style={{ display: "grid", alignSelf: "center" }}
          >
            <h2>{product?.title}</h2>
            <p>
              <b>{product?.description}</b>
            </p>
            <h3>₹ {product?.price}</h3>
            {/* <div className="my-3">
              <button
                className="btn btn-sm btn-danger m-1"
                style={{ fontWeight: "bold" }}
              >
                Buy Now
              </button>
              <button
                onClick={() =>
                  addToCart(
                    product?.productId,
                    product.title,
                    product.price / product.qty,
                    1,
                    product.imgSrc
                  )
                }
                className="btn btn-sm btn-warning m-1"
                style={{ fontWeight: "bold" }}
              >
                Add To Cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <RelatedProduct category={product?.category} />
    </>
  );
}

export default ProductDetail;
