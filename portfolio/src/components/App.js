import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Route path="/" component={NavBar} />
        <Route path="/" component={Introduction} />
        <Route path="/" component={AboutMe} />
      </div>
    </BrowserRouter>
  );
}

export default App;
