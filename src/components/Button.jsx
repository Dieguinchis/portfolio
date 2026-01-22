import React from "react";
import "@/styles/button.css";

function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn ${variant}`} {...props}>
      <span>{children}</span>
    </button>
  );
}

export default Button;