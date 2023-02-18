import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/twitter.png";
import navIcon3 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12}  className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arpan-bagui/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Arpan_BagHolder"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/abagui11"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}