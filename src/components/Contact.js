import { Container, Row, Col,Toast } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";

export const Contact = () => {

  const[copy,setcopy]=useState("abhiraj812000@gmail.com")
  const handlecopy=()=>{
      navigator.clipboard.writeText(copy)
  }
      const[nocopy,nosetcopy]=useState("6387618397")
  const handlecopyno=()=>{
      navigator.clipboard.writeText(nocopy)
  }
  return (
    <section id="contact" className="contact" >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  style={{ fontFamily: "Centra" }}
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <button style={{color:"white",textDecoration:"underline"}} onClick={handlecopy}  >Click To Copy Email</button>
                  <p   style={{ fontFamily: "Centra" }} id="contact-email">
                    If you are looking to get ahold of me, you can send me an
                    email at -- abhiraj812000@gmail.com
                  </p>
                  

                  <p   style={{ fontFamily: "Centra" }}>
                    You can also reach me on LinkedIn at{" "}
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      style={{marginRight:"7px"}}
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                   
                    <a style={{textDecoration:"underline", color:"white", fontFamily: "Centra"}}
                       
                      target="_blank"
                      id="contact-linkedin"  href="https://www.linkedin.com/in/abhishekrs07"
                    >
                      Abhishek Raj Singh
                    </a>
                  </p>

                  <br />
                  <p  style={{ fontFamily: "Centra" }}>My Github {' '}{' '}
                    <a style={{textDecoration:"underline", color:"white",fontFamily: "Centra"}}  id="contact-github" href="https://github.com/abhishekrs07">AbhishekRS07</a></p>
                    <br />
                    <button style={{color:"white",textDecoration:"underline"}} onClick={handlecopyno}  >Click To Copy Number</button>
                  <p style={{ fontFamily: "Centra" }} id="contact-phone">Reach me on my cell - {" "} +91 638-761-8397</p>
                         
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
 
    </section>
  );
};
