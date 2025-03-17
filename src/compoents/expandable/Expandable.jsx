import React, { useState } from "react";

const Expandable = ({ children, maxChars }) => {
  const [showFullText, setSHowFullText] = useState(true);

  const text = showFullText ? children : children.substring(0, maxChars);
  if (children.length <= maxChars) return <div>{children}</div>;

  return (
    <div>
      {text}...
      <button onClick={() => setSHowFullText((prevState) => !prevState)}>
        {showFullText ? "less" : "more"}
      </button>
    </div>
  );
};

export default Expandable;
