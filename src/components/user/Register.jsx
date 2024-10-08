import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) {
      navigate("/login");
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
              <b className="border-bottom">User Register</b>
            </legend>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <b>Name : </b>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="Your full name"
                aria-describedby="textHelp"
                required
                autoFocus
              />
            </div>
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
