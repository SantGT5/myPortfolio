import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import RecentWork from "./RecentWor";
import SocialMedia from "./SocialMedia";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Route path="/" component={NavBar} />
        <div style={{ marginTop:"15rem" }}>
        <Route path="/" component={Introduction} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={RecentWork} />
        {/* <Route
          path="/ironNote"
          component={() => {
            window.location = "https://iron-note.netlify.app/";
            return null;
          }}
        />

        <Route
          path="/gitHubAccount"
          component={() => {
            window.location = "https://github.com/SantGT5";
            return null;
          }}
        />
        <Route
          path="/linkedInAccount"
          component={() => {
            window.location = "https://www.linkedin.com/in/gian-lucas/";
            return null;
          }}
        />

        <Route
          path="/instAccount"
          component={() => {
            window.location = "https://www.instagram.com/giaanlucas_/";
            return null;
          }}
        /> */}

        <Route path="/" component={SocialMedia} />

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
