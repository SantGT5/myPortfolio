
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

        <a rel="noreferrer" href="https://github.com/SantGT5" target="_blank">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-github"
          ></i>
        </a>

        <a rel="noreferrer" href="https://www.linkedin.com/in/gian-lucas/?locale=en_US" target="_blank">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-linkedin-in"
            
          ></i>
        </a>

        <a rel="noreferrer" href="https://www.instagram.com/giaanlucas_/" target="_blank">
          <i
            style={{ color: "white", fontSize: "40px" }}
            className="fab fa-instagram"
          ></i>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
