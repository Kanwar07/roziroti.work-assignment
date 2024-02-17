import React from "react";
import { Carousel } from "react-responsive-carousel";
import carouselvenuesstyle from "./CarouselVenues.module.css";

function CarouselVenues() {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      showArrows={false}
      emulateTouch={true}
    >
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg"
          alt="image1"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg"
          alt="image2"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg"
          alt="image3"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png"
          alt="image4"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg"
          alt="image2"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg"
          alt="image3"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg"
          alt="image4"
          className={carouselvenuesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
    </Carousel>
  );
}

export default CarouselVenues;
