import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" style={{ paddingTop: '50px' }}>
          <Col sm={12} className="text-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/adrianccollier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a
                href="https://github.com/AdrianCCollier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
              <a
                href="/Resume Adrian Collier.pdf"
                download="Resume Adrian Collier.pdf"
              >
                <img src={navIcon3} alt="Download Adrian Collier's Resume" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
