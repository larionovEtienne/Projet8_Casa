// ExpandableSection.jsx
import React, { useState } from "react";

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpansion} className="expand-button">
        {title}
      </button>
      {isExpanded && <div className="expanded-content">{content}</div>}
    </div>
  );
};

export default ExpandableSection;
