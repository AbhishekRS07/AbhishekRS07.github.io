import React from "react";
import footer from "../assets/img/footer-bg.png";

const About = () => {
  return (
    <div
      id="about"
      style={{
        width: "100%",
        padding: "60px",
        marginBottom: "100px",
        background:
          " linear-gradient(90.21deg, rgba(170, 54, 124, 0.3) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      }}
    >
      <h3
        style={{
          color: "whitesmoke",
          fontSize: "25px",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          width: "96%",
        }}
      >
        About Me{" "}
      </h3>
      <p
        style={{
          color: "#fffff",
          fontSize: "22px",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          width: "96%",
        }}
      >
        My name is Abhishek Raj Singh, I’m a web developer. I spend my whole day,
        practically every day, experimenting with HTML, CSS and JavaScript;
        dabbling with React and JSX; and inhaling a wide variety of potentially
        not so useful information through a few hundred tech feeds. I build websites
        that delight and inform. I do it well. I do my best to stay on top of
        changes in the state of the art so that I can meet challenges with tools
        well suited to the job at hand.
      </p>

      <button
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "9px",
          borderRadius: "3px",
          marginRight: "10px",
        }}
      >
        View Resume
      </button>
      <button
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "9px",
          borderRadius: "3px",
        }}
      >
        Download Resume{" "}
      </button>
    </div>
  );
};

export default About;
