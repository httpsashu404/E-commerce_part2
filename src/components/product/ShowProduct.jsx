import "./style.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function ShowProduct() {
  const { products, filterData, addToCart } = useContext(AppContext);
  return (
    <>
      <div className="container showProduct d-flex justify-content-center align-items-center">
        <div className="row container d-flex my-5">
          {filterData?.map((product) => (
            <div
              key={product._id}
              className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
            >
              <div className="card text-light mb-2" style={{ backgroundColor: "#294a70" }}>
                <Link
                  to={`/product/${product._id}`}
                  className="image p-1 d-flex justify-content-center align-items-center"
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="image"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "10px",
                    }}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text text-secondary">
                    {product.description}
                  </p> */}
                  <div className="justify-content-between">
                    <button
                      className="btn btn-sm btn-primary m-1"
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
                      className="btn btn-sm btn-warning m-1"
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
    </>
  );
}

export default ShowProduct;
