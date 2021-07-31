import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import img from "./img/2560217.png";

function NavBar() {
  return (
    <div className="navBarDes fixed-top container">
      <nav className="navbar">
        <div style={{ background: "#181818" }} className="container-fluid">
          <Link to="/" style={{ color: "white", fontSize: '25px' }} className="navbar-brand">
            {/* <i
              style={{ color: "white", fontSize: "27px" }}
              className="fas fa-bug"
            ></i> */}
             <div className="err" title="404">404</div>
          </Link>

          <div className="navIcon">
            <a href="mailto:gianspf@gmail.com?subject=Let's Talk!">
              <i
                style={{ fontSize: "30px" }}
                className="far fa-envelope"
              ></i>
            </a>

            <Link to="/gitHubAccount" target="popup">
              <i
                style={{ fontSize: "30px" }}
                className="fab fa-github"
              ></i>
            </Link>

            <Link to="/linkedInAccount" target="popup">
              <i
                style={{ fontSize: "30px" }}
                className="fab fa-linkedin-in"
              ></i>
            </Link>

            <Link to="/instAccount" target="popup">
              <i
                style={{ fontSize: "30px" }}
                className="fab fa-instagram"
              ></i>
            </Link>
          </div>

          <div className="d-flex">
            {/* <Link to="/" style={{ color: "white" }} className="navbar-brand">
            <i className="fas fa-file-download"></i> Curriculum
            </Link> */}

            <DropdownButton
              id="dropdown-button-dark-example2"
              variant="#181818"
              menuVariant="dark"
              title="CV Download"
              className="drop"
            >
              <Dropdown.Item
                style={{ color: "white" }}
                href={img}
                download="pdf-Curriculum"
              >
                test
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{ color: "white" }} href="#/action-4">
                Separated link
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
