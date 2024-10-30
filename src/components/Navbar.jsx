import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  // location
  const location = useLocation();

  // filter products
  const { setfilterData, products, logout, cart, user, admin } =
    useContext(AppContext);

  // filter by categories
  const filterByCategory = (cat) => {
    setfilterData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  // filter by price
  const filterByPrice = (price) => {
    setfilterData(products.filter((data) => data.price <= price));
  };

  // form submit function
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setsearchTerm("");
  };
  return (
    <>
      <nav
        style={{ backgroundColor: "#294a70" }}
        className="navbar navbar-expand navbar-dark shadow sticky-top"
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            {/* <img
              className="logo"
              src="../../image/logo.png"
              alt=""
              style={{ width: "60px" }}
            /> */}
            <h4 className="">ZenMart</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <br />
            <form
              autoComplete="off"
              onSubmit={submitHandler}
              className="search"
            >
              <input
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
                className="form-control d-none d-sm-block"
                type="text"
                placeholder="Search Products...."
                aria-label="Search"
              />
            </form>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ fontSize: "16px" }}
            >
              {user && (
                <>
                  <li title="Home" className="nav-item d-none d-sm-block">
                    <Link to={"/"} className="nav-link">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-house"
                      ></i>
                      {/* <b>Home</b> */}
                    </Link>
                  </li>
                  <li title="Cart" className="nav-item px-1">
                    <Link
                      to={"/cart"}
                      className="nav-link position-relative"
                      href="#"
                    >
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-cart-shopping"
                      >
                        {cart?.items?.length > 0 && (
                          <span
                            style={{
                              color: "white",
                              fontSize: "10px",
                              width: "20px",
                              height: "20px",
                              borderRadius: "50px",
                              textAlign: "center",
                            }}
                            className="position-absolute translate-middle p-1 bg-danger border border-light rounded-circle"
                          >
                            {cart?.items?.length}
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        )}
                      </i>
                    </Link>
                  </li>
                  <li title="Profile" className="nav-item px-1">
                    <Link to={"/profile"} className="nav-link" href="#">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-regular fa-circle-user"
                      ></i>
                    </Link>
                  </li>
                  <li title="Logout" className="nav-item px-1">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-right-from-bracket"
                      ></i>
                    </a>
                  </li>
                </>
              )}

              {!user && !admin && (
                <>
                  <li title="Home" className="nav-item d-none d-sm-block">
                    <Link to={"/"} className="nav-link">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-house"
                      ></i>
                      {/* <b>Home</b> */}
                    </Link>
                  </li>
                  <li title="Admin" className="nav-item">
                    <Link to={"/admin"} className="nav-link" href="#">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-user-shield"
                      ></i>
                    </Link>
                  </li>
                  <li title="Register" className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-registered"
                      ></i>
                    </Link>
                  </li>
                  <li title="Login" className="nav-item">
                    <Link to={"/login"} className="nav-link" href="#">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-right-to-bracket"
                      ></i>
                    </Link>
                  </li>
                </>
              )}

              {admin && (
                <>
                  <li title="Home" className="nav-item d-none d-sm-block">
                    <Link to={"/"} className="nav-link">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-house"
                      ></i>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Manage
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#"></a>
                      </li>
                      <li>
                        <Link
                          to={"/dashboard"}
                          className="dropdown-item"
                          href="#"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to={'/addProduct'} className="dropdown-item" href="#">
                          Add product
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/alluser"}
                          className="dropdown-item"
                          href="#"
                        >
                          All users
                        </Link>
                      </li>
                      <li>
                        <Link to={"/allorders"} className="dropdown-item" href="#">
                          All orders
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li title="Profile" className="nav-item px-1">
                    <Link to={"/adminProfile"} className="nav-link" href="#">
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-regular fa-circle-user"
                      ></i>
                    </Link>
                  </li>
                  <li title="Logout" className="nav-item px-1">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      <i
                        style={{ fontSize: "22px" }}
                        className="fa-solid fa-right-from-bracket"
                      ></i>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* use location for sub navbar */}
      {(location.pathname != "/" || location.pathname != "/dashboard") && (
        <div
          style={{
            width: "35px",
            height: "35px",
            marginBottom: "15px",
            marginRight: "15px",
            marginLeft: "auto",
            textAlign: "center",
            borderRadius: "50px",
            border: "1px solid black",
          }}
          className="home d-sm-none fixed-bottom bg-warning"
        >
          <Link to={"/"} className="nav-link text-dark p-1">
            <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      )}
      {(location.pathname == "/" || location.pathname == "/dashboard") && (
        <nav className="navbar navbar-expand-sm navbar-dark m-none p-mone border-bottom">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-brand d-block d-sm-none m-auto"
              style={{ fontFamily: "mv boli" }}
            >
              <b>Filter Items</b>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav align-center">
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => setfilterData(products)}
                  className="nav-item"
                >
                  <a href="#" className="nav-link active" aria-current="page">
                    No filter
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByCategory("mobile")}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    Mobile
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByCategory("laptop")}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    Laptop
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByCategory("airbuds")}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    Airbuds
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByCategory("headphone")}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    Headphone
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByCategory("camera")}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    Camera
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(1000)}
                  className="nav-item d-none d-sm-block"
                >
                  <a href="#" className="nav-link">
                    ₹1000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(10000)}
                  className="nav-item d-none d-md-block"
                >
                  <a href="#" className="nav-link">
                    ₹10000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(20000)}
                  className="nav-item d-none d-md-block"
                >
                  <a href="#" className="nav-link">
                    ₹20000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(30000)}
                  className="nav-item d-none d-lg-block"
                >
                  <a href="#" className="nav-link">
                    ₹30000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(40000)}
                  className="nav-item d-none d-lg-block"
                >
                  <a href="#" className="nav-link">
                    ₹40000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(50000)}
                  className="nav-item d-none d-lg-block"
                >
                  <a href="#" className="nav-link">
                    ₹50000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(60000)}
                  className="nav-item d-none d-lg-block"
                >
                  <a href="#" className="nav-link">
                    ₹60000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(70000)}
                  className="nav-item d-none d-xl-block"
                >
                  <a href="#" className="nav-link">
                    ₹70000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(80000)}
                  className="nav-item d-none d-xl-block"
                >
                  <a href="#" className="nav-link">
                    ₹80000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(90000)}
                  className="nav-item d-none d-md-block"
                >
                  <a href="#" className="nav-link">
                    ₹90000
                  </a>
                </li>
                <li
                  style={{ borderRight: "2px dotted white" }}
                  onClick={() => filterByPrice(1000000)}
                  className="nav-item d-none d-xl-block"
                >
                  <a href="#" className="nav-link">
                    ₹1000000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
