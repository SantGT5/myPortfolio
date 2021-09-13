import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import myCV from "./MyCV/GianLucas - CV.pdf";
import myCVPNG from "./MyCV/GianLucas - CV.png";

function NavBar() {
  return (
    <div className="navBarDes fixed-top">
      <div className="navbar">
        <div
          style={{ background: "#181818", flexWrap: "nowrap" }}
          className="container-fluid"
        >
          <div
            style={{ color: "white", fontSize: "25px" }}
            className="navbar-brand"
          >
            <div className="err" title="404">
              404
            </div>
          </div>

          <div className="navIcon" style={{ display:"flex", justifyContent:"center" }}>
            <a href="mailto:gianspf@gmail.com?subject=Let's Talk!">
              <i style={{ fontSize: "30px" }} className="far fa-envelope"></i>
            </a>

            <a
              rel="noreferrer"
              href="https://github.com/SantGT5"
              target="_blank"
            >
              <i style={{ fontSize: "30px" }} className="fab fa-github"></i>
            </a>

            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/gian-lucas/?locale=en_US"
              target="_blank"
            >
              <i
                style={{ fontSize: "30px" }}
                className="fab fa-linkedin-in"
              ></i>
            </a>

            <a
              rel="noreferrer"
              href="https://www.instagram.com/giaanlucas_/"
              target="_blank"
            >
              <i style={{ fontSize: "30px" }} className="fab fa-instagram"></i>
            </a>
          </div>

          {/* <Link to="/" style={{ color: "white" }} className="navbar-brand">
            <i className="fas fa-file-download"></i> Curriculum
            </Link> */}

          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="#181818"
            menuVariant="dark"
            title="My CV"
            className="drop"
          >
            <Dropdown.Item
              style={{ color: "white" }}
              href={myCV}
              download="GianLucas - CV"
            >
              PDF Version
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "white" }}
              href={myCVPNG}
              download="GianLucas - CV"
            >
              PNG Version
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
