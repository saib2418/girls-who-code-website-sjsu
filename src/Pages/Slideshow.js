import React from 'react'
import './pages.css';
import './slideshow.css';

const images = ["#0088FE", "#00C49F", "#FFBB28"];
function Slideshow() {
    return (

        <div className="content">
            <h1 className="content-header" id='slideshow'></h1>
        <div className="slideshow">
          <div className="slideshowSlider">
            {images.map((backgroundImage, index) => (
              <div className="slide" key={index} style={{ backgroundImage }}/>
            ))}
          </div>
        </div>
        </div>
      );
    }

export default Slideshow;