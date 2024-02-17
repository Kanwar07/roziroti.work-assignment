import React from "react";
import videostyle from "./Video.module.css";
import video from "../../assets/24carrots.mp4";

function Video() {
  return (
    <div className={videostyle.video}>
      <video autoplay loop muted className={videostyle.mainvideo}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={videostyle.text}>
        <h1>Simply the Finest</h1>
      </div>
      <h2>
        <img
          src="https://24carrots.com/wp-content/themes/24carrots/img/icon/down-cheveron.svg"
          alt="expanddown"
        />
      </h2>
    </div>
  );
}

export default Video;
