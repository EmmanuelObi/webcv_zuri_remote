import React from "react";
import classes from "./exp.module.css";

const ExperiencePage = () => {
  return (
    <div className={classes.experiencePage}>
      <h2>Professional Experience</h2>
      <div className={classes.bar}></div>
      <div className={classes.expo}>
        <div className={classes.job}>
          <p>
            | <b> Software Engineer</b>, RoadPreppers Technologies (Contract)
          </p>
          <p>04/2022 – present | Lagos, Nigeria</p>
        </div>

        <ul>
          <li>
            <b>Review, build, maintain and improve</b> company website.{" "}
          </li>
          <li>
            Maintaining existing <b>web applications</b> to ensure their
            <b> sustainability</b> for over <b>10,000 monthly users</b>
          </li>
          <li>
            Working on new features to improve overall <b>user experience</b>.
          </li>
        </ul>
      </div>
      <div className={classes.expo}>
        <div className={classes.job}>
          <p>
            | <b> Software Engineer</b>, Atlens Limited (Full Time)
          </p>
          <p>07/2021 – present | Lagos, Nigeria</p>
        </div>

        <ul>
          <li>
            <b>Implemented</b> websites and landing pages from concept through
            to
            <b> deployment</b>.
          </li>
          <li>
            <b>Increased</b> website code efficiency (reduction) of{" "}
            <b>5 client projects</b> by over <b>15%</b> each.
          </li>
          <li>
            <b>Collaborated</b> on a <b>fintech</b> client project which was
            approved by <b> Australian financial services</b>.
          </li>
        </ul>
      </div>
      <div className={classes.expo}>
        <div className={classes.job}>
          <p>
            | <b> Frontend Engineer</b>, Hotels.Ng(Internship)
          </p>
          <p>08/2021 – 10/2021| Remote, Nigeria</p>
        </div>

        <ul>
          <li>
            <b>Collaborated</b> with my team members on a workplace
            communication tool like <b> Slack</b>.
          </li>
          <li>
            We built the application using <b>Reactjs</b> for the frontend and
            <b>Django(python)</b> on the backend.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;
