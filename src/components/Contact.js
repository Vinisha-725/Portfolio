import { useState, useRef } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  
  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    
    emailjs.sendForm(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      form.current, 
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setStatus({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
      setButtonText('Send');
      // Reset form
      form.current.reset();
    }, (error) => {
      setStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      });
      setButtonText('Send');
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="user_name" 
                          placeholder="First Name" 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="user_lastname" 
                          placeholder="Last Name" 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          name="user_email" 
                          placeholder="Email Address" 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          name="user_phone" 
                          placeholder="Phone No." 
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          name="message" 
                          placeholder="Message" 
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <Alert 
                            variant={status.success ? "success" : "danger"}
                            className={status.success ? "status-success" : "status-error"}
                          >
                            {status.message}
                          </Alert>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}