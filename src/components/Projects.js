import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Myntra Clone",
      description: "A Popular E-commerce website for online shopping of clothes and accessories. ",
      imgUrl: projImg1,
      link1:"https://github.com/AbhishekRS07/Myntra",
      link2:"https://team-myntra.netlify.app/",
      tech:"HTML|JavaScript|CSS|Netlify",
    },
    {
      title: "Oestin",
      description: "Oestin is a website for browsing and booking and hotels.",
      imgUrl: projImg2,
      link1:"https://github.com/AbhishekRS07/Oestin-Clone",
      link2:"https://team-oestin.netlify.app/",
      tech:"HTML|JavaScript|CSS|Netlify",
    },
    {
      title: "Empty",
      description: "Empty",
      imgUrl: projImg3,
      link1:" ",
      link2:"",
    },
    {
      title: "Empty",
      description: "Empty",
      imgUrl: projImg3,
      link1:" ",
      link2:"",
    },
  ];

  return (
    <section id="projects" className="project"  >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of my projects
                  </p>
                  <br/>
                  <br/>
                  <br/>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard  key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
