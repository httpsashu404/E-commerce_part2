import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AppContext);
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
    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    }
    // alert("Form Submited");
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <form
            style={{ backgroundColor: "#294a70" }}
            autoComplete="off"
            onSubmit={submitHandler}
            className="
          col-12 col-sm-10 col-md-8 col-lg-5 m-5 p-3 text-light shadow border rounded
          "
          >
            <legend className="text-center">
              <b>User Login</b>
            </legend>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <b>Email : </b>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="Your email address"
                aria-describedby="emailHelp"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <b>Password : </b>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="row justify-content-between">
              <button type="submit" className="btn btn-primary col-5">
                Login
              </button>
              <Link to={"/register"} className="btn btn-outline-warning col-5">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
