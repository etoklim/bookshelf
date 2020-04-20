import React from "react";
import "./Credentials.scss";

function Credentials() {
  return (
    <div className="credentials">
      <span className="credentials__name">Made by Vladyslav Klymenko</span>
      <a
        className="credentials__link"
        href="https://www.linkedin.com/in/vladklymenko/"
      >
        linkedIn
      </a>
      &nbsp;
      <a className="credentials__link" href="mailto:drkleem@gmail.com">
        drkleem@gmail.com
      </a>
    </div>
  );
}

export default Credentials;
