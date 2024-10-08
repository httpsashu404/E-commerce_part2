import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Address() {
  const { shipingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    fullName: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
    address: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { fullName, city, state, country, pincode, phoneNumber, address } =
    formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await shipingAddress(
      fullName,
      country,
      state,
      city,
      pincode,
      phoneNumber,
      address
    );
    if (result.success) {
      navigate("/checkout");
    }
    setformData({
      fullName: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: "",
      address: "",
    });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <form
            style={{ backgroundColor: "#294a70" }}
            autoComplete="off"
            onSubmit={submitHandler}
            className="
          col-12 col-sm-10 col-md-8 col-lg-6 m-4 p-3 text-light shadow border rounded
          "
          >
            <legend className="text-center">
              <b>Shiping Address</b>
            </legend>
            <div className="row">
              <div className="col-sm mb-3">
                <label htmlFor="fullName" className="form-label">
                  FullName :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChangeHandler}
                  placeholder="Your fullname"
                  required
                  autoFocus
                />
              </div>
              <div className="col-sm mb-3">
                <label htmlFor="country" className="form-label">
                  Country :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={onChangeHandler}
                  placeholder="Your Country"
                  required
                />
              </div>
              <div className="col-sm mb-3">
                <label htmlFor="state" className="form-label">
                  State :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={onChangeHandler}
                  placeholder="Your State"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm mb-3">
                <label htmlFor="city" className="form-label">
                  City :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={onChangeHandler}
                  placeholder="Your city"
                  required
                />
              </div>
              <div className="col-sm mb-3">
                <label htmlFor="pincode" className="form-label">
                  Pincode :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={onChangeHandler}
                  placeholder="Your pincode"
                  required
                />
              </div>
              <div className="col-sm mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Contact :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  maxLength={10}
                  value={formData.phoneNumber}
                  onChange={onChangeHandler}
                  placeholder="Your phoneNumber"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm mb-3">
                <label htmlFor="address" className="form-label">
                  AddressLine/Nearby :
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={onChangeHandler}
                  placeholder="Village, Nearby landmark/building."
                  required
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <button className="col-5 btn btn-primary my-2">
                <b>Submit</b>
              </button>
              {userAddress && (
                <button
                  onClick={() => navigate("/checkout")}
                  className="col-5 btn btn-warning my-2"
                >
                  <b>Old Address</b>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Address;
