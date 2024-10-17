import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import {Link, useNavigate } from "react-router-dom";

function forgetPass() {
  const { forgetPass } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await forgetPass(email, password);
    if (result.success) {
      navigate("/login");
    }
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
          col-12 col-sm-10 col-md-8 col-lg-5 m-5 p-3 text-light shadow border rounded
          "
          >
            <legend className="text-center mb-4">
              <b className="border-bottom">Forget Password</b>
            </legend>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.user}
                onChange={onChangeHandler}
                placeholder="Your email address"         
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Your new password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="row justify-content-between py-2">
              <button type="submit" className="btn btn-primary col-5">
                Generate
              </button>
              <Link to={"/login"} className="btn btn-outline-warning col-5">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default forgetPass;
