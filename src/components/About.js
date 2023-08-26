import React from "react";
import resume from "../assets/resume.pdf";
import "./mix.css"



const About = () => {
  const downloadFileAtURL = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div
      id="about"
      className="about section"
      style={{
        
    
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
       id="user-detail-intro"
        style={{
          color: "#fffff",
          fontSize: "22px",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          width: "96%",
        }}
       
      >
        My name is Abhishek Raj Singh, I’m a web developer. I spend my whole
        day, practically every day, experimenting with HTML, CSS ,JavaScript
        ,NodeJs,and Redux dabbling with React and MUI; and inhaling a wide
        variety of potentially not so useful information through a few hundred
        tech feeds. I build websites that delight and inform. I do it well. I do
        my best to stay on top of changes in the state of the art so that I can
        meet challenges with tools well suited to the job at hand.The list of
        projects I follow on GitHub will give you a good idea of the types of
        tools I’d prefer to be using and will give you a glimpse into the
        reading material I find interesting enough to share.
      </p>

      <button
        id="resume-button-2"
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "9px",
          borderRadius: "3px",
          margin: "5px",
        }}
        onClick={() => {
          downloadFileAtURL(resume);
        }}
      >
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/1Glp8YKhiFGOz02dVQjYJnW-5kBJJErNX/view?usp=drive_link"
          target="_blank"
        >
          {" "}
          Download/View Resume
        </a>
      </button>

      {/* <button
        id="resume-button-2"
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "9px",
          borderRadius: "3px",
          margin: "5px",
        }}
      >
        <a
          
          target="_blank"
          href="https://drive.google.com/file/d/1TQXVdLzSzG7ymMoD3vgNw72_M4iOLG19/view?usp=drive_link"
        >
          {" "}
          View Resume{" "}
        </a>
      </button> */}
    </div>
  );
};

export default About;
