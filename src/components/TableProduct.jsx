import AppContext from "../context/AppContext";
import { useContext, useEffect, useState } from "react";

function TableProduct({ cart }) {
  const { decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setprice] = useState(0);

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
      <table className="table table-sm table-bordered text-light">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Titile</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Qty--</th>
            <th>Qty++</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.items?.map((product) => (
            <tr key={product._id} className="container">
              <th scope="row">
                <img
                  className="rounded"
                  src={product.imgSrc}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </th>
              <td>{product.title}</td>
              <td>₹ {product.price}/-</td>
              <td>{product.qty}</td>
              <td>
                <i
                  onClick={() => decreaseQty(product.productId, 1)}
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  className="fa-solid fa-circle-minus"
                ></i>
              </td>
              <td>
                <i
                  onClick={() =>
                    addToCart(
                      product?.productId,
                      product.title,
                      product.price / product.qty,
                      1,
                      product.imgSrc
                    )
                  }
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  className="fa-solid fa-circle-plus"
                ></i>
              </td>
              <td>
                <i
                  onClick={() => {
                    if (confirm("Are you sure remove product from cart"))
                      removeFromCart(product.productId);
                  }}
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  className="fa-solid fa-trash-can bg-danger"
                ></i>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <button className="btn btn-primary">Total price</button>
            </td>
            <td>
              <button className="btn btn-warning">₹ {price}/-</button>
            </td>
            <td>
              <button className="btn btn-info">Qty : {qty}</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableProduct;
