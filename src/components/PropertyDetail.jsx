// PropertyDetail.jsx
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
      <div className="info-container">
        <div className="title-h2">
          <h2>{property.title}</h2>
        </div>
        <div className="location">
          <p>{property.location}</p>
        </div>

        <div className="host-man">
          {property.host && (
            <p>
              {property.host.name && (
                <>
                  <span>{property.host.name.split(" ")[0]}</span>
                  <br />
                  <span>
                    {property.host.name.split(" ").slice(1).join(" ")}{" "}
                  </span>
                </>
              )}
            </p>
          )}

          {property.host && (
            <img
              src={property.host.picture}
              alt={`Host: ${property.host.name}`}
            />
          )}
        </div>

        <div className="tags">
          {property.tags &&
            property.tags.map((tag, index) => <p key={index}>{tag}</p>)}
        </div>
        <div className="stars">
          <p>{renderRatingStars(property.rating)}</p>
        </div>
      </div>

      <div className="collaps">
        <ExpandableSection
          title="Description"
          content={<p>{property.description}</p>}
        />
        <ExpandableSection
          title="Equipments"
          content={
            property.equipments && (
              <div>
                {property.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default PropertyDetail;
