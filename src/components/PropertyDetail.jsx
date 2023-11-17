import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderComponent from "./SliderComponent";
import "./PropertyDetail.css";
import ExpandableSection from "./ExpandableSection";

const renderRatingStars = (rating) => {
  const totalStars = 5;
  const activeStars = Math.floor(rating);
  const remainingStars = totalStars - activeStars;

  const activeStar = "\u2605";
  const inactiveStar = "\u2606";

  const activeStarsString = activeStar.repeat(activeStars);
  const remainingStarsString = inactiveStar.repeat(remainingStars);

  return `${activeStarsString}${remainingStarsString}`;
};

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setProperty(jsonData);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail">
      {Array.isArray(property.pictures) && property.pictures.length > 0 && (
        <SliderComponent pictures={property.pictures} />
      )}
      <h2>{property.title}</h2>
      <p className="plocation">{property.location}</p>
      {property.tags && <p className="ptag">{property.tags.join(", ")}</p>}
      <div className="photohost">
        {property.host && <p className="phost">{property.host.name}</p>}
        {property.host && (
          <img
            src={property.host.picture}
            alt={`Host: ${property.host.name}`}
          />
        )}
      </div>
      <p>Rating: {renderRatingStars(property.rating)}</p>

      <ExpandableSection
        title="Description"
        content={<p>{property.description}</p>}
      />
      <ExpandableSection
        title="Equipments"
        content={property.equipments && <p>{property.equipments.join(", ")}</p>}
      />
    </div>
  );
};

export default PropertyDetail;
