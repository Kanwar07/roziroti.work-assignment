import React from "react";
import buttonstyle from "../button/Button.module.css";

function ServicesButton() {
  return (
    <>
      <div className={buttonstyle.dropdown}>
        <button className={buttonstyle.button}>Services</button>
        <div class={buttonstyle.dropdownlist}>
          <a href="##" style={{ paddingTop: "16px 0px" }}>
            Gourmet Catering
          </a>
          <a href="##">Bar Service</a>
          <a href="##">Staffing</a>
          <a href="##">Production</a>
        </div>
      </div>
    </>
  );
}

export default ServicesButton;
