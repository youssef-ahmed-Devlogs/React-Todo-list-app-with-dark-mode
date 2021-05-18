import React from "react";
import FeatherIcon from "feather-icons-react";

const Header = (props) => {
  return (
    <div className="header">
      <h2 className="header-title">Todo</h2>
      <div className="color-mode-icon" onClick={props.toggleColorMode}>
        <FeatherIcon icon={props.darkMode ? "sun" : "moon"} size="30" />
      </div>
    </div>
  );
};

export default Header;
