import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rohan-v-menon-44623520a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/rohan.vmenon.3"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_rohan.v_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright Rohan😊. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
