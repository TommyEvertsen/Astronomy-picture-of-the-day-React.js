import React from "react";
import RandomFact from "../components/Fact";

const Mygg = () => {
  return (
    <>
      <h1 className="space-text">Random facts about space</h1>
      <br></br>
      <button className="glow-on-hover " onClick={RandomFact}>
        Random fact
      </button>
      <br></br>
      <h3 id="here" className="space-facts">
        In 3.75 billion years the Milky Way and Andromeda galaxies will collide.
      </h3>
    </>
  );
};

export default Mygg;
