import React from "react";
import buttonstyle from "../button/Button.module.css";

function EventsButton() {
  return (
    <>
      <div className={buttonstyle.dropdown}>
        <button className={buttonstyle.button}>Events</button>
        <div class={buttonstyle.dropdownlist}>
          <a href="##" style={{ paddingTop: "16px 0px" }}>
            Weddings
          </a>
          <a href="##">Corporate</a>
          <a href="##">Social</a>
          <a href="##">Gallery</a>
        </div>
      </div>
    </>
  );
}

export default EventsButton;
