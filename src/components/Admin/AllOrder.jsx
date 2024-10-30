import { useContext } from "react";
import AppContext from "../../context/AppContext";

function AllOrder() {
  const { allOrder } = useContext(AppContext);
  console.log("My orders : ", allOrder);
  return (
    <>
      <div className="container text-center text-light mt-5">
        <h1 className="">All Orders</h1>
        <hr />
        <b>Now, working on this page.</b>
      </div>
    </>
  );
}

export default AllOrder;
