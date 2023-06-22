import { Container, Row, Col } from "react-bootstrap";
import logoMain from "../assets/img/logoMain.png"
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer   className="footer">

      <Container  >
        <Row className="align-items-center">
        
          <Col  style={{marginTop:"50px"}} size={12} sm={6}>
            <img src={logoMain} alt="Logo" />
          </Col>
          <Col  style={{marginTop:"50px"}} size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishekrs07/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/_abhishek_07_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
