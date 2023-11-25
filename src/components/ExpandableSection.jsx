// ExpandableSection.jsx

import React, { useState } from "react";
import "./ExpandableSection.css";

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`expandable-section ${isExpanded ? "expanded" : ""}`}>
      <button onClick={toggleExpansion} className="expand-button">
        {title}
      </button>
      <div className="content-container">{content}</div>
    </div>
  );
};

export default ExpandableSection;
