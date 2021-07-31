import { Link } from "react-router-dom";
{
  /* <a className="email" href="mailto:gianspf@gmail.com?subject=Let's Talk!">Contact </a> */
}
function NavBar() {
  return (
    <div className="mb-5">
      <nav className="navbar">
        <div style={{ background: "black" }} className="container-fluid">
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
