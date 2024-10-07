import { useEffect, useState } from "react";

function ShowOrderProduct({ items }) {
  const [qty, setQty] = useState(0);
  const [price, setprice] = useState(0);

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (items) {
      for (let i = 0; i < items?.length; i++) {
        qty += items[i].qty;
        price += items[i].price;
      }
      setprice(price);
      setQty(qty);
    }
  }, [items]);

  return (
    <>
      <div className="container">
        <table className="table table-sm table-bordered text-light">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Titile</th>
              <th>Price</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((product) => (
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowOrderProduct;
