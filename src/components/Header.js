import React from "react";
//Creates a header functional component
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
//Creates a headerStyle functional component with states
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
