import { Link } from "react-router-dom";

function RecentWork() {
  return (
    <div className="recenDes">
      <h1 className="recentWork d-flex justify-content-center">Recent Work</h1>
      <div className="list d-flex flex-column bd-highlight mb-3">
        <span>
          <Link to="/ironNote" target="popup" style={{ color: "white", textDecoration: "none" }}>
            IronNote
          </Link>
        </span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
      </div>
    </div>
  );
}
export default RecentWork;
