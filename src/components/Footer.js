import { Container, Row, Col } from 'react-bootstrap'
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" style={{ paddingTop: '50px' }}>
          {' '}

          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/adrianccollier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/AdrianCCollier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="/Resume Adrian Collier.pdf"
                download="Resume Adrian Collier.pdf"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}