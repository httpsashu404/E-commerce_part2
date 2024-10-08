import "./style.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function ShowProduct() {
  const { products, filterData, addToCart } = useContext(AppContext);
  return (
    <>
      <div className="container showProduct d-flex justify-content-center align-item-center">
        <div className="row container d-flex my-5">
          {filterData?.map((product) => (
            <div
              key={product._id}
              className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center align-item-center"
            >
              <div className="card text-light m-2" style={{ backgroundColor: "#294a70" }}>
                <Link
                  to={`/product/${product._id}`}
                  className="image p-2 d-flex justify-content-center align-item-center"
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top shadow"
                    alt="image"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "10px",
                    }}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5><br />
                  {/* <p className="card-text text-secondary">
                    {product.description}
                  </p> */}
                  <div className="row justify-content-around">
                    <button
                      className="btn btn-sm btn-primary"
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
                      className="btn btn-sm btn-warning"
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
