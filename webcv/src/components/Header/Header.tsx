import React from "react";
import classes from "./header.module.css";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Header = () => {
  return (
    <div className={classes.header}>
      <ResponsiveAppBar />
    </div>
  );
};

export default Header;
