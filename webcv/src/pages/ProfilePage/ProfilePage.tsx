import React from "react";
import classes from "./profilePage.module.css";

const ProfilePage = () => {
  return (
    <section className={classes.profilePage}>
      <h2>Profile Summary</h2>
      <div className={classes.bar}></div>

      <p className={classes.info}>
        Meticulous frontend engineer with valuable experience focused on
        building <b>user-friendly</b> and <b>accessible websites</b> and
        <b> web applications</b> in both team and self-directed setting. <br />
        Proficient with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and{" "}
        <b>React</b>; plus, modern <b>UI libraries</b> and frameworks. <br />{" "}
        Passionate about
        <b> user experience</b> and <b>responsive design</b>. Possess working
        knowledge of AngularJs and Figma.
      </p>

      <br />

      <p className={classes.info}>
        Due to my noticed passion for technology and its community, I'm an
        Ambassador for various tech communities and I lead a tech community
        called I4GXOOU. I'm also a tutor, In my spare time I teach computer
        programming to members of my community and try to share my knowledge
        with as many as I can.{" "}
      </p>
    </section>
  );
};

export default ProfilePage;
