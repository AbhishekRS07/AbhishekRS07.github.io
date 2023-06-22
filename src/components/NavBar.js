import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoMain from "../assets/img/logoMain.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import resume from "../assets/resume.pdf"
import { BrowserRouter as Router } from "react-router-dom";

const PDF_FILE = "https://drive.google.com/file/d/1TQXVdLzSzG7ymMoD3vgNw72_M4iOLG19/view?usp=drive_link";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

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
    <Router>
      <Navbar id="nav-menu" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <h1 style={{ color: "white" }}>Abhishek</h1> */}
            <img src={logoMain} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
               class='nav-link home'
                href="#home"
                className= {
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                } 
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                class="nav-link.about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#skills"
                class=".nav-link.skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                class=".nav-link.projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                class=".nav-link.contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("connect")}
              >
                Contact
              </Nav.Link>
                
              <Nav.Link
                href="#about"
                class=".nav-link.resume"
                id="resume-button-1"
                className={
                  activeLink === "about"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={ ()=>{downloadFileAtURL(resume)}}
                
              >
                Resume
              </Nav.Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
