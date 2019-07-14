import React from "react";
import "../App.css";

function Jumbotron(props) {
  return (
    <div className="container">
    <div
      className={`
        jumbotron
        ${props.fluid ? "jumbotron-fluid" : ""}
        bg-${props.bg || "default"}
        text-${props.color || "dark"}
        text-center
        jumboCustom
        `}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
      </div>
    </div>

    </div>

  );
}

export default Jumbotron;
