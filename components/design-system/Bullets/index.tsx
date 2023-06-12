import React from "react";
import "./bullets.css";

export const DefaultBullet: React.FC<{bg?: string, boxShadowColor?: string}> = ({ bg, boxShadowColor }) => {
  const styles = {
    backgroundColor: bg || "#FFA5E6",
    boxShadow: boxShadowColor
      ? `0px 0px 8px ${boxShadowColor}`
      : "0px 0px 8px rgba(255, 165, 230, 0.5)",
  };

  return <div className="bullet" style={styles}></div>;
};
