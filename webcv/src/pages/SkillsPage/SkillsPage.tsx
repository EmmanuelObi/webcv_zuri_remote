import React from "react";
import classes from "./skills.module.css";

const SkillsPage = () => {
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes.bar}></div>
      <p className={classes.info}>
        <b>Technical -</b> HTML5, CSS3(Bootstrap, Sass, Gsap), JavaScript,
        ReactJs, Material UI, Chakra UI, Styled Components, Google, Agile
        methodologies, Technical Documentation, Active Learning
      </p>
      <p className={classes.info}>
        <b>Soft -</b> Oral & Written Communication, Team Collaboration, Team
        Building, Creative Thinking.
      </p>
      <p className={classes.info}>
        <b>Tools -</b> GitHub, Bitbucket, Git, VsCode, Jira, Trello, Slack,
        Chrome Dev Tools.
      </p>
      <br />
      <h2>Awards</h2>
      <div className={classes.bar}></div>
      <p className={classes.info}>
        <b>Best In Physics</b>, Home Science Association Secondary School
        <br /> July/2018
      </p>
      <p className={classes.info}>
        <b>Best In Geography</b>, Home Science Association Secondary School
        <br /> July/2018
      </p>
    </div>
  );
};

export default SkillsPage;
