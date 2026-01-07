import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/GitHub.svg";
import instagramIcon from "../assets/img/Instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* Logo removed */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="#"><img src={githubIcon} alt="GitHub" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
            <p>Built and developed by Vinisha Sahoo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
