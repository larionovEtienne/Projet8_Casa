// SliderComponent.jsx
import React, { useState } from "react";
import "./SliderComponent.css";

const SliderComponent = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const showNavigation = pictures.length > 1;

  return (
    <div className="slider">
      <div className="slides">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {index === currentSlide && (
              <img src={picture} alt={`Slide ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
      {showNavigation && (
        <>
          <button onClick={goToPrevSlide} className="prev-button"></button>
          <button onClick={goToNextSlide} className="next-button"></button>
        </>
      )}
      <div className="slide-number">
        {currentSlide + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default SliderComponent;
