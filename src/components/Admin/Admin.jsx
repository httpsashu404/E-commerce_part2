import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const submitHandler = () => {
    navigate("/dashboard");
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
              <b className="border-bottom">Admin Login</b>
            </legend>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
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
                placeholder="Your password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />
            </div>
            <p>
              <Link style={{ float: "right" }} to="/forgetPass">
                forget password?
              </Link>
            </p>
            <br />
            <div className="row justify-content-center py-2">
              <button type="submit" className="btn btn-primary col-5">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;
