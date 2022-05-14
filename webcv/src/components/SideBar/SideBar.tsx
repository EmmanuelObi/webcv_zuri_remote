import React from "react";
import HeadShot from "../HeadShot/HeadShot";
import classes from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sideBar_Container}>
      <HeadShot />
    </div>
  );
};

export default SideBar;
