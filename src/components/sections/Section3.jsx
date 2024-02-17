import React from "react";
import section3style from "./Section3.module.css";
import ExploreButton from "../button/ExploreButton";

function Section3() {
  return (
    <>
      <div className={section3style.maindiv}>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png"
          alt="venue"
          className={section3style.image1}
        />
        <div className={section3style.semicircle}></div>
        <h2 className={section3style.text}>Venues</h2>
        <h1 className={section3style.heading}>Unforgettable Venues</h1>
        <p className={section3style.para}>
          24 Carrots is the exclusive or preferred caterer at Southern
          California’s most spectacular properties. From intimate understated
          spaces to large and luxurious, we’ll help you find the event venue
          that makes your heart skip a beat.
        </p>
        <div className={section3style.button}>
          <ExploreButton />
        </div>
      </div>
    </>
  );
}

export default Section3;
