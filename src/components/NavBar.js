import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBarDes">
      <nav className="navbar">
        <div style={{ background: "#181818" }} className="container-fluid">
          <Link to="/" style={{ color: "white" }} className="navbar-brand">
            Navbar
          </Link>
          <div className="d-flex">
            <Link to="/" style={{ color: "white" }} className="navbar-brand">
              Contact me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
