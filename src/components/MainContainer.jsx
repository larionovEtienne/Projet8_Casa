// MainContainer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./MainContainer.css";

const MainContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      {data.map((item) => (
        <Link
          to={`/property/${item.id}`}
          key={item.id}
          style={{
            textDecoration: "none",
            color: "inherit",
            marginBottom: "40px",
          }}
        >
          <Card data={item} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
