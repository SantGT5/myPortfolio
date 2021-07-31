function AboutMe() {
  return (
    <div className="aboutDes">
      <div>
        <i
          style={{ color: "white", fontSize: "50px" }}
          className="aboutMe fas fa-quote-right"
        >
          <span>Hey, I am Developer based in Spain - Madrid.</span>
          <p>Passionate to code, looking for challenges.</p>
          <p>All my partners have relied on me for coding,</p>
          <p>implementation and deploy Websites.</p>
          <p>As a developer, I am always learning,</p>
          <p className="contact">and never bored :)</p>
          <p className='quest'>
            Got any questions?{" "}
            <a
              className="email"
              href="mailto:gianspf@gmail.com?subject=Let's Talk!"
            >
              {" "}
              Contact me.
            </a>
          </p>
        </i>
      </div>
    </div>
  );
}

export default AboutMe;
