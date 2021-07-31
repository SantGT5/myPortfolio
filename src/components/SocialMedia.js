import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div>
      <h1
        className="d-flex justify-content-center"
        style={{ color: "white", marginBottom: "2em", fontFamily: "Roboto Mono", fontWeight: "700"}}
      >
        Let's get social
      </h1>
      <div style={{ marginBottom:"8em" }} className="socialIcon">
        <a
          href="mailto:gianspf@gmail.com?subject=Let's Talk!"
        >
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="far fa-envelope"
          ></i>
        </a>

        <Link to="/gitHubAccount" target="popup">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-github"
          ></i>
        </Link>

        <Link to="/linkedInAccount" target="popup">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-linkedin-in"
          ></i>
        </Link>

        <Link to="/instAccount" target="popup">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-instagram"
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
