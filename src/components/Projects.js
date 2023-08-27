
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
// import "animate.css";
import AOS from "aos"
import "aos/dist/aos.css"
import "./pro.css";
import { useEffect } from "react";

const Projects= () => {
  const projects = [
    {
      title: "Myntra Clone",
      description:
        "A Popular E-commerce website for online shopping of clothes and accessories. ",
      imgUrl: projImg1,
      link1: "https://github.com/AbhishekRS07/Myntra",
      link2: "https://team-myntra.netlify.app/",
      tech: "HTML|JavaScript|CSS|Netlify",
    },
    {
      title: "Oestin",
      description: "Oestin is a website for browsing and booking and hotels.",
      imgUrl: projImg2,
      link1: "https://github.com/AbhishekRS07/Oestin-Clone",
      link2: "https://team-oestin.netlify.app/",
      tech: "HTML|JavaScript|CSS|Bootstrap|Netlify",
    },
    {
      title: "HeroFit App",
      description: "Online gym application",
      imgUrl: projImg3,
      link1: "https://github.com/AbhishekRS07/HeroFit",
      link2: "https://herofit.netlify.app/",
      tech: "React|MongoDB|Express|NodeJs|JSX|CSS|MUI|Netlify",
    },
    {
      title: "Empty1",
      description: "Empty",
      imgUrl: projImg1,
      link1: " ",
      link2: "",
    },
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };


    useEffect(()=>{
    AOS.init({duration:1500})
    },[])
  
  return (
    <div id="projects">
      <div id="projecthead">
        <h1 style={{fontWeight:"800"}}>Projects</h1>
        <p style={{fontSize:"20px"}}>Here are some of my Projects</p>
      </div>

      <div id="procardholder">
        {projects.map((elem) => (
          <div data-aos="fade-up" key={elem.title} id="procard">
            <img id="proimg" src={elem.imgUrl} alt="" />

            <div id="prodetails">
              <h2 id="protitle">{elem.title}</h2>
              <p id="prodesc">{elem.description}</p>
              <p id="protech">{elem.tech}</p>
            </div>
            <div id="probutton">
              <button id="prolive" onClick={() => openLink(elem.link2)}> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg></button>
              <button id="progit" onClick={() => openLink(elem.link1)}> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
