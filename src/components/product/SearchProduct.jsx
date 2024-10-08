import "./style.css";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";

function searchProduct() {
  const { products, addToCart } = useContext(AppContext);
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
    <div className="container showProduct d-flex justify-content-center align-items-center">
      <div className="row container d-flex my-5">
        {searchProduct?.map((product) => (
          <div
            key={product._id}
            className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
          >
            <div className="card text-light mb-1" style={{ backgroundColor: "#294a70" }}>
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
    </>
  );
}

export default searchProduct;
