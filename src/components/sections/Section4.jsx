import React from "react";
import section4style from "./Section4.module.css";
import CarouselVenues from "../carousel/CarouselVenues";

function Section4() {
  return (
    <div className={section4style.main}>
      <CarouselVenues />
      <div className={section4style.colorback}>
        <div className={section4style.text}>Far More Than Just Business</div>
        <p className={section4style.para}>
          The way you do anything is the way you do everything. We haven’t
          cracked the code on catering; we simply care unreasonably about every
          aspect of what we do. We care about people as much as we care about
          details, and we absolutely refuse to compromise on making your day
          anything but the best. We’ve got your back from the initial idea to
          the final farewell!
        </p>
      </div>
      <video
        width="80%"
        height="50%"
        className={section4style.video}
        controls
        poster="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg"
      >
        <source src="https://youtu.be/7gPP9hsV4a0" type="video/mp4" />
      </video>
    </div>
  );
}

export default Section4;
