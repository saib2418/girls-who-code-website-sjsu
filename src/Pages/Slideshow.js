import React, { useEffect, useState } from "react";
import "./slideshow.css";
import image1 from "../img/pic1.JPG";
import image2 from "../img/pic2.JPG";
import image3 from "../img/pic3.JPG";
import image4 from "../img/pic1.jpeg";
import image5 from "../img/pic5.jpg";
import image6 from "../img/img6.jpeg";
import image7 from "../img/img7.jpeg";
import image8 from "../img/img8.jpeg";
import image9 from "../img/img9.jpeg";

const images = [image4, image6, image7, image8, image9, image3, image5];
//change index every 2.5 seconds using setTimeout
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) => {
          if (prevIndex == images.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        }),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="front-page" id="slideshow">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {images.map((image, index) => (
            <img className="slide" key={index} src={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
