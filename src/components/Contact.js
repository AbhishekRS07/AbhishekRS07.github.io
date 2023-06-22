import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
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
                <div style={{fontFamily:""}}
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <h4 style={{ color: "black" }}
                  >
                    Email:{" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href=""
                    >
                      abhiraj812000@gmail.com
                    </a>
                  </h4>
                  <br />

                  <h4 style={{ color: "black" }}>
                    Linkden:{" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href="https://www.linkedin.com/in/abhishekrs07/"
                    >
                      {" "}
                      Click here
                    </a>
                  </h4>
                  <br />

                  <h4 style={{ color: "black" }}>
                    Instagram:{" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href="https://www.instagram.com/_abhishek_07_/"
                    >
                      {" "}
                      Click here
                    </a>
                  </h4>
                  <br />

                  <h4 style={{ color: "black" }}>
                    WhatsApp:{" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href=""
                    >
                      {" "}
                      6387618397
                    </a>
                  </h4>
                  <br />

                  <h4 style={{ color: "black" }}>
                    Address:
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href=""
                    >
                      {" "}
                      Hno-503, TYPE-3, 32 PAC colony, Transport Nagar, Lucknow
                    </a>
                  </h4>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
