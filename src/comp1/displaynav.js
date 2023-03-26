import React from "react";
import "./nav.css";
const Displaynav = () => {
  return (
    <div>
      <center>
        <div className="body">
          <h1>React</h1>
          <p>A JavaScript library for building user interfaces</p>
          <br></br>
          <div className="display">
            <button className="btn">Get Started</button>

            <a href="https://reactjs.org/tutorial/tutorial.html">
              Take the Tutorial
            </a>

            <i className="chevron right icon"></i>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Displaynav;
