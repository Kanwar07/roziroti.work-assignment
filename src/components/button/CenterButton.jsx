import React from "react";
import buttonstyle from "../button/Button.module.css";

function CenterButton() {
  return (
    <button className={buttonstyle.home}>
      <img
        src="https://24carrots.com/wp-content/themes/24carrots/img/24carrots.svg"
        alt="24carrots"
      />
    </button>
  );
}

export default CenterButton;
