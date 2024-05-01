import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import lottie from 'lottie-web'
import animationData from '../assets/img/Banner.json'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(175 - Math.random() * 100)
  const toRotate = [
    'Full-Stack Developer',
    'Software Engineer',
    'JavaScript & React Developer',
  ]
  const period = 2000
  const animationContainer = useRef(null)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
        clearCanvas: true,
        hideOnTransparent: true,
      },
    })

    return () => anim.destroy();
  }, [])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(175 - Math.random() * 100)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Adrian`}
                    <div className="txt-rotate" style={{ display: 'block' }}>
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>
                    I'm a recent Computer Science graduate and have specialized
                    in Full-Stack Software Development with a focus on React.js,
                    Node.js, Express.js, MongoDB, and AWS. I'm a strong believer
                    that solving problems is all about the ability to break them
                    into smaller more achievable sub-problems. I'm eager to join
                    a dynamic team in order to begin contributing. Feel free to
                    explore my work to see how I use technology to transform
                    ideas into functional applications.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            style={{ paddingLeft: '7.5%', paddingRight: '5%' }}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  ref={animationContainer}
                  style={{
                    height: 400,
                    width: 400,
                    transform: 'rotate(290deg)',
                    transformOrigin: 'center center',
                  }}
                />
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
