// PhotoTextComponent.jsx

import "./PhotoTextComponent.css";

const PhotoTextComponent = ({ imagePath, text, responsive }) => {
  return (
    <div className={`photo-text-component${responsive ? " responsive" : ""}`}>
      <img src={imagePath} alt="Photo" className="photo" />
      <p className="text">{text}</p>
    </div>
  );
};

export default PhotoTextComponent;
