import React from "react";

export default function CustomProgressBar({ bgColor, completed }) {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "e0e0de",
    borderRadius: 50,
    margin: "20px 0",
  };

  const barStyle = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgColor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyle = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyles}>
      <div style={barStyle}>
        <span style={labelStyle}>{`${completed}%`}</span>
      </div>
    </div>
  );
}
