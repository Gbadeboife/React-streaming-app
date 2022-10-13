import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Home(){

  return(
      <div className="home">
      <Link to="/Video" >
      <img src="https://media.vimejs.com/poster.png" alt="good boy"/>
      <p>Video 1</p></Link>
      </div>

  )
}


export default Home