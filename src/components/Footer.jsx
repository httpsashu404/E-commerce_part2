import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "#294a70", marginTop:'80vh' }}
        className="container-fluid text-light text-center py-3"
      >
        <div className="row justify-content-between align-items-between">
          <div className="col-6 col-md-4  py-2">
            <b className="border-bottom">Quick Links</b>            
            <Link className="d-block nav-link" to={"/"}>
              Home
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              About Us
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Contact Us
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Information
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Careers
            </Link>
          </div>
          <div className="col-6 col-md-4  py-2">
            <b className="border-bottom">Services</b>
            <Link className="d-block nav-link" to={"/"}>
            Payments
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Shiping
            </Link>
            <Link className="d-block nav-link" to={"/"}>
            Track
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Cancellation
            </Link>
            <Link className="d-block nav-link" to={"/"}>
              Return
            </Link>
          </div>
          <div className="col-md py-2">
            <b className="border-bottom">Address</b>
            <br />
            ZenMart E-commerce <br />
            Sasaram, Rohtas <br />
            Bihar, 821115 <br />
            <a className="nav-link" href="tel:7763992074">
              <i className="fa-solid fa-mobile-screen-button"> </i> +91
              7763992074
            </a>
            <a className="nav-link" href="mailto:ashutoshssm352@gmail.com">
              <i className="fa-solid fa-envelope-open-text"> </i>{" "}
              ashutoshssm352@gmail.com
            </a>
          </div>
          <div className="container-fluid text-secondary border-top pt-1">
            <b>All &reg; reserved  &hearts; httpsashu404 .2024</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
