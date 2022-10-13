import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import VideoPlayer from "./components/Videoplayer";
import "./App.css"
import Home from "./components/Home";

function App(){
  

  return(
    <div className="player">

  <Router>
    <Switch>
      <Route path="/Video"><VideoPlayer/></Route>
      <Route exact path="/" ><Home/></Route>
    </Switch>

  </Router>
  </div>


  )
}


export default App