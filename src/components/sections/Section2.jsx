import React from "react";
import section2style from "./Section2.module.css";
import LearnMore from "../button/LearnMore";

function Section2() {
  return (
    <div className={section2style.main}>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
          alt="wedding"
          className={section2style.image1}
        />
      </div>
      <div className={section2style.textmaindiv}>
        <div className={section2style.text1}>
          Making Every Experience Magical
        </div>
        <div className={section2style.innertextdiv}>
          <div className={section2style.innertext}>
            <div className={section2style.text2}>Weddings</div>
            <div className={section2style.text2}>Social</div>
            <div className={section2style.text2}>Corporate</div>
            <div className={section2style.text2}>Venues</div>
          </div>
          <div>
            <div className={section2style.text2heading}>
              Exceptional Weddings
            </div>
            <div className={section2style.text2para}>
              The most important day of your life, is ours too. Your wedding
              should be the ultimate celebration of your relationship, and our
              team of experts guide you through the process, offering peace of
              mind and a remarkable experience.
            </div>
            <div className={section2style.button}>
              <LearnMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
