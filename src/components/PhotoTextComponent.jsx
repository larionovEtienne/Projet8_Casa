// PhotoTextComponent.jsx
import React from "react";
import "./PhotoTextComponent.css";

const TextContainer = ({ children, responsive }) => {
  const containerClass = responsive
    ? "text-container responsive"
    : "text-container";
  return <div className={containerClass}>{children}</div>;
};

const PhotoTextComponent = ({ imagePath, text, responsive }) => {
  const showText = text && text.trim().length > 0;

  return (
    <div className={`photo-text-component${responsive ? " responsive" : ""}`}>
      <img src={imagePath} alt="Photo" className="photo" />
      {showText && (
        <TextContainer responsive={responsive}>
          {text.split(",").map((part, index) => (
            <p key={index} className={`text-line-${index + 1}`}>
              {part.trim()}
              {index < 1 && ","}
            </p>
          ))}
        </TextContainer>
      )}
    </div>
  );
};

export default PhotoTextComponent;
