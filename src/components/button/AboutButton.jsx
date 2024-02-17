import React from "react";
import buttonstyle from "../button/Button.module.css";

function AboutButton() {
  return (
    <>
      <div className={buttonstyle.dropdown}>
        <button className={buttonstyle.button}>About</button>
        <div class={buttonstyle.dropdownlist}>
          <a href="##" style={{ paddingTop: "16px 0px" }}>
            About 24 Carrots
          </a>
          <a href="##">Team</a>
          <a href="##">Awards & Press</a>
          <a href="##">Blog</a>
        </div>
      </div>
    </>
  );
}

export default AboutButton;
