// Card.jsx
import "./Card.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { cover, title, id } = data;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/property/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      {cover && <img src={cover} alt="Cover" />}
      <p>{title}</p>
    </div>
  );
};

export default Card;
