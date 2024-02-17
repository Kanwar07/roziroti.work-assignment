import React from "react";
import { Carousel } from "react-responsive-carousel";
import carouselimagesstyle from "./CarouselImages.module.css";

function CarouselImages() {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      showArrows={false}
      emulateTouch={true}
    >
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
          alt="image1"
          className={carouselimagesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg"
          alt="image2"
          className={carouselimagesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg"
          alt="image3"
          className={carouselimagesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
      <div>
        <img
          src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg"
          alt="image4"
          className={carouselimagesstyle.images}
          style={{ height: "100vh", width: "100%", padding: "10% 0" }}
        />
      </div>
    </Carousel>
  );
}

export default CarouselImages;
