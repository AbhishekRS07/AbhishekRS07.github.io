import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg1 from "../assets/img/headerImg1.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import resume from "../assets/resume.pdf";

// const PDF_FILE =
//   "https://drive.google.com/file/d/1TQXVdLzSzG7ymMoD3vgNw72_M4iOLG19/view?usp=drive_link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" I'm a Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  // const downloadFileAtURL = (url) => {
  //   const filename = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", filename);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 id="user-detail-name">
                    {`Hi! I'm Abhishek`}{" "}
                    <span
                      id="user-detail-intro"
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "I am a Web Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>

                  {/* <button
                    id="resume-button-2"
                    style={{
                      backgroundColor: "white",
                      width: "auto",
                      padding: "9px",
                      borderRadius: "3px",
                      color:"black"
                    }}
                    onClick={() => {
                      downloadFileAtURL(resume);
                    }}
                  >
                    Download Resume
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    class="home-img"
                    style={{ borderRadius: "50%" }}
                    src={headerImg1}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
