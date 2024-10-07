import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setprice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
      setprice(price);
      setQty(qty);
    }
  }, [cart]);

  return (
    <>
      {cart?.items?.length <= 0 ? (
        <>
          <div className="shoping text-center">
            <button
              className="btn btn-warning my-5"
              onClick={() => navigate("/")}
            >
              <b>Continue Shoping</b>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <div className="btn btn-sm btn-info my-2 mx-2">
              <b>Total Qty : </b>
              {qty}
            </div>
            <div className="btn btn-sm btn-warning my-2 mx-2">
              <b>Total : ₹</b>
              {price}/-
            </div>            
          </div>
        </>
      )}
      {cart?.items?.map((product) => (
        <div
          key={product._id}
          className="container text-center text-light mt-2 bg-secondary rounded"
        >
          <div className="row justify-content-between align-items-center">
            <div className="left col-3 col-sm-5 mb-1">
              <img
                className="image"
                src={product?.imgSrc}
                alt="image"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                  border: ".5px solid silver",
                }}
              />
            </div>
            <div className="right col-8 col-sm-5">
              <p>
                <b>{product?.title}</b>
                {product?.description} <br />₹ {product?.price}/- <br />
                Qty : {product?.qty} <br />
              </p>
              <div className="my-1">
                <div
                  onClick={() =>
                    addToCart(
                      product?.productId,
                      product.title,
                      product.price / product.qty,
                      1,
                      product.imgSrc
                    )
                  }
                  style={{ fontSize: "22px" }}
                  className="btn btn-sm btn-outline-dark m-1 text-light py-0"
                >
                  <b>+</b>
                </div>
                <div
                  onClick={() => decreaseQty(product.productId, 1)}
                  style={{ fontSize: "22px" }}
                  className="btn btn-sm btn-outline-dark m-1 text-light py-0"
                >
                  <b>-</b>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Are you sure remove product from cart"))
                      removeFromCart(product.productId);
                  }}
                  className="btn btn-sm btn-danger m-1"
                  style={{ fontWeight: "bold" }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {cart?.items?.length > 0 && (
        <>
          <div className="container text-center">
            <button
              onClick={() => navigate("/shiping")}
              className="btn btn-sm btn-warning my-2 mx-4"
            >
              <b>Buy Now</b>
            </button>
            <button
              className="btn btn-sm btn-warning my-2 mx-4"
              onClick={() => {
                if (confirm("Are you sure, want to clear cart")) clearCart();
              }}
            >
              <b>Clear Cart</b>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
