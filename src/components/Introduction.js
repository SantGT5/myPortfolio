function Introduction() {
  return (
    <div >
      <h1 className="intro">
        Hello<strong style={{ color: "red", fontSize: "130px" }}>.</strong>
      </h1>
      <div className="introName">
        <p className="intro mb-4">I am GianLucas</p>
      </div>

      <div className="introDescription d-flex justify-content-center">
        <i
          style={{ color: "white", fontSize: "35px" }}
          className="icon fas fa-terminal"
        ></i>
        <span style={{ color: "yellow", fontSize: "25px", marginTop: "1px" }}>
          {" "}
          Full Stack Developer
        </span>
        
      </div>
    </div>
  );
}

export default Introduction;
