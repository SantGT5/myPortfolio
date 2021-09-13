function RecentWork() {
  return (
    <div className="recenDes">
      <h1 className="recentWork d-flex justify-content-center">My Projects</h1>
      <div
        className="list d-flex flex-column bd-highlight mb-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <a
          className="p-2 bd-highlight"
          rel="noreferrer"
          href="https://bookme-app.netlify.app/"
          target="_blank"
        >
          <div>BookMe</div>
        </a>
        <a
          className="p-2 bd-highlight"
          rel="noreferrer"
          href="https://iron-note.netlify.app/"
          target="_blank"
        >
          <div>IronNote</div>
        </a>
        <a
          className="p-2 bd-highlight"
          rel="noreferrer"
          href="https://santgt5.github.io/KeyTrainer/"
          target="_blank"
        >
          <div>KeyTrainer</div>
        </a>
      </div>
    </div>
  );
}
export default RecentWork;
