import React from "react";
import classes from "./headShot.module.css";
import Image from "../../asset/image/Emmanuel_Image.jpeg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeadShot = () => {
  return (
    <div className={classes.headshot_container}>
      <img src={Image} alt="Emmanuel" />

      <h2 className={classes.name}>Emmanuel Obi</h2>

      <h3 className={classes.title}>Software Engineer</h3>

      <div className={classes.contact_links}>
        <a target="_blank" rel="noreferrer" href="mailto:obiemmy123@gmail.com">
          <EmailIcon fontSize="large" />
        </a>
        <a target="_blank" rel="noreferrer" href="tel:+2348060597961">
          <PhoneIcon fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://emmanuel-obi.vercel.app"
        >
          <InsertLinkIcon fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/emmanuelobi20"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/koliko_man"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/emmanuelobi"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <a href="#!" download className={classes.CVbtn}>
        Toggle CV
      </a>
    </div>
  );
};

export default HeadShot;
