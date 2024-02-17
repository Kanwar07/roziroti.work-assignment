import React from "react";
import section1style from "./Section1.module.css";
import Section1Contact from "../button/Section1Contact";
import CarouselImages from "../carousel/CarouselImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Section1() {
  return (
    <div className={section1style.main}>
      <div className={section1style.textarea}>
        <h3 className={section1style.headingmain}>Welcome to 24 carrots</h3>
        <h2 className={section1style.heading}>Remarkable Catering & Events</h2>
        <p className={section1style.para}>
          24 Carrots is the premier catering and events company of choice in
          Southern California. We create remarkable experiences by offering the
          finest quality foods and providing unsurpassed personalized service,
          driven by our passion for life’s special&nbsp;occasions.
        </p>
        <div className={section1style.button}>
          <Section1Contact />
        </div>
      </div>
      <div className={section1style.images}>
        <CarouselImages />
      </div>
    </div>
  );
}

export default Section1;
