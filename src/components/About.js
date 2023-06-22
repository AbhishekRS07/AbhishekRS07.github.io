import React from "react";
import footer from "../assets/img/footer-bg.png";

const PDF_FILE = "http://localhost:3000/resume.pdf"



const About = () => {
   

    const downloadFileAtURL=(url)=>{
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href= url;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }


  return (
    <div 
      id="about"
      class="about section"
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
        id="user-detail-intro"
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
        <a style={{textDecoration:"none",color:"black"}} target="_blank" href="https://drive.google.com/file/d/1TQXVdLzSzG7ymMoD3vgNw72_M4iOLG19/view?usp=drive_link"> View Resume </a>
       
      </button>

      <button id="resume-button-2"
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "9px",
          borderRadius: "3px",
        }}  onClick={()=>{downloadFileAtURL(PDF_FILE)}}
      >
        Download Resume{" "}
      </button>
    </div>
  );
};

export default About;
