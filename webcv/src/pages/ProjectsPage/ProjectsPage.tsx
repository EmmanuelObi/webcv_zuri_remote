import React from "react";
import classes from "./projects.module.css";

const ProjectsPage = () => {
  return (
    <div className={classes.projectsPage}>
      <h2>Projects</h2>
      <div className={classes.bar}></div>
      <div className={classes.expo}>
        <div className={classes.job}>
          <p>
            |{" "}
            <b>
              {" "}
              Global Accelerex ( http://global-accelerex-web.herokuapp.com/ ),
            </b>
            &nbsp;(Currently still in development)
          </p>
          <p> 01/2022 – present</p>
        </div>

        <p>
          Aimed at continuously providing innovative electronic payment,
          collection and remittance solutions that are secure, reliable and cost
          effective.
        </p>

        <ul>
          <li>
            In the course of this project, I’ve developed multiple websites
            tailored to suit the various branches and locations of the brand in
            numerous countries.
          </li>
          <li>
            I also developed a content management system that allows content on
            all the brand websites to be created, updated and deleted.
          </li>
        </ul>
      </div>
      <div className={classes.expo}>
        <div className={classes.job}>
          <p>
            | <b>WireMoney ( https://www.wiremoney.com.au/ ) </b>
          </p>
          <p> 07/2021 – 11/2021</p>
        </div>

        <p>
          Whether you’re sending money to loved ones back home, or getting
          payments from clients overseas, Wiremoney makes it super easy and fast
          with lower transfer fees!
        </p>

        <ul>
          <li>
            Researched and Implemented application features to aid user
            experience on the web.
          </li>
          <li>
            Collaborated with product and business personnel to optimize
            application for product feasibility.
          </li>
          <li>
            Translated UI/UX design wireframes to production-ready code using
            frontend libraries and Angular framework.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
