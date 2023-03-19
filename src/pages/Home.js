import React from "react";
import RandomFact from "../components/Fact";


function Home() {
  return (
    <>
      <h1 className="space-text">Welcome to Space explorer</h1>
      <h4 className="white-text ">
        This page is dedicated to give you a new astronomy picture every day.
      </h4>
      <br></br>
      <br></br>
      <button className="glow-on-hover space-text" onClick={RandomFact}>
        Random fact
      </button>
      <br></br>
      <h4 id="here" className="space-facts">
        In 3.75 billion years the Milky Way and Andromeda galaxies will collide.
      </h4>
    </>
  );
}

export { Home };

