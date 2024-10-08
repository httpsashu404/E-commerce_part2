import "./style.css";
import { useContext, useState, useEffect } from "react";
import "./style.css";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function RelatedProduct({ category }) {
  const { products, addToCart } = useContext(AppContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    setRelatedProduct(
      products.filter(
        (data) => data?.category?.toLowerCase() == category?.toLowerCase()
      )
    );
  }, [category, products]);
  return (
    <>
      <div className="container RelatedProduct mt-5">
        <h2 className="text-center">
          <u className="text-light">
            <b>Related Product</b>
          </u>
        </h2>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row container d-flex mb-5">
            {relatedProduct?.map((product) => (
              <div
                key={relatedProduct._id}
                className="my-3 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
              >
                <div
                  className="card text-light"
                  style={{ backgroundColor: "#294a70" }}
                >
                  <Link
                    to={`/product/${product._id}`}
                    className="image d-flex justify-content-center align-items-center p-1"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="image"
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "10px",
                        border: "1px solid silver",
                      }}
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <div className="justify-content-around">
                      <button
                        className="btn btn-sm btn-primary mx-1"
                        style={{ width: "max-content" }}
                      >
                        ₹ {product.price}/-
                      </button>
                      <button
                        onClick={() =>
                          addToCart(
                            product._id,
                            product.title,
                            product.price,
                            1,
                            product.imgSrc
                          )
                        }
                        className="btn btn-sm btn-warning mx-1"
                        style={{ width: "max-content" }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedProduct;
