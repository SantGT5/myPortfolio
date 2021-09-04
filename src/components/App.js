import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import RecentWork from "./RecentWork";
import SocialMedia from "./SocialMedia";

function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={NavBar} />
      <div style={{ marginLeft:"70px", marginRight:"70px" }}>
      
        <div style={{ marginTop:"15rem", width:"100%" }}>
        <Route path="/" component={Introduction} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={RecentWork} />
        <Route path="/" component={SocialMedia} />

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
