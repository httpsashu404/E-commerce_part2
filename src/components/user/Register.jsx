import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { name, email, phone, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, phone, password);
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
              <b className="border-bottom">User Register</b>
            </legend>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="Your full name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={onChangeHandler}
                placeholder="Your phone/mobile number"
                required
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
            <div className="row justify-content-between py-2">
              <button type="submit" className="btn btn-primary col-5">
                Register
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

export default Register;
