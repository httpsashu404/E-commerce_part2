import { useContext } from "react";
import AppContext from "../context/AppContext";

function OrderTable() {
  const { allOrder } = useContext(AppContext);
  // console.log("My order : ", allOrder);
  return (
    <>
      <table id="table" className="table table-bordered text-center text-light">
        {allOrder?.map((orders) => (
          <div key={orders?._id} className="mb-2">
            <thead className="bg-dark text-light">
              <th>Product Image</th>
              <th>Titile</th>
              <th>Price</th>
              <th>Qty</th>
            </thead>
            <tbody>
              {orders?.orderItems?.map((item) => (
                <tr key={item?._id} style={{ backgroundColor: "#294a70" }}>
                  <td>
                    <img
                      className="rounded"
                      src={item?.imgSrc}
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </td>
                  <td>{item?.title}</td>
                  <td>₹ {item?.price}/-</td>
                  <td>{item?.qty}</td>
                </tr>
              ))}
            </tbody>
          </div>
        ))}
      </table>
    </>
  );
}

export default OrderTable;
