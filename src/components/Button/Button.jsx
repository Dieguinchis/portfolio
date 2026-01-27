import React from "react";
import "@/components/Button/button.css";

function Button({ children, variant = "primary", as = "button", ...props }) {
  const Component = as;
  return (
    <Component className={`btn ${variant}`} {...props}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;