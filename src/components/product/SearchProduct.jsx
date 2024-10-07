import "./style.css";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";

function searchProduct() {
  const { products } = useContext(AppContext);
  const [searchProduct, setsearchProduct] = useState([]);

  const { term } = useParams();

  useEffect(() => {
    setsearchProduct(
      products.filter((data) =>
        data?.title?.toLowerCase().includes(term.toLowerCase())
      )
    );
  }, [term, products]);
  return (
    <>
      <div className="container RelatedProduct mt-5">
        <div className="container d-flex justify-content-center align-item-center">
          <div className="row container d-flex mb-5">
            {searchProduct?.map((product) => (
              <div
                key={product._id}
                className="my-3 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-item-center"
              >
                <div className="card text-dark bg-light">
                  <Link
                    to={`/product/${product._id}`}
                    className="image d-flex justify-content-center align-item-center p-3"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="image"
                      style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "10px",
                        border: "1px solid silver",
                      }}
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="row">
                      <button
                        className="btn btn-primary mx-1 col-5"
                        style={{ width: "max-content" }}
                      >
                        ₹ {product.price}/-
                      </button>
                      <button
                        className="btn btn-warning mx-1 col-5"
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

export default searchProduct;
