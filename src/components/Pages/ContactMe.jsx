import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactMe() {
  const [validated, setValidated] = useState(false)

  const [pressed, isPressed] = useState(false);

  const handleMouseDown = () => {
    isPressed(true);
  }
  const handleMouseUp = () => {
    isPressed(false);
  }

  const buttonPress = {
    background: pressed ? '#fff' : '#594d52',
    color: pressed ? '#594d52' : '#fff'
  }

  const handleSubmit = (e) => {
    const form = e.target;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <div className="container-sm">
      <div className="row gx-5 justify-content-center">
        <div className="col-12 col-lg-5 order-3 order-lg-1 text-start">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="pb-5" controlId="name">
              <Form.Label className="h5">Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First and Last Name"
              />
            </Form.Group>
            <Form.Group className="pb-5" controlId="email">
              <Form.Label className="h5">Email*</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="myemail@email.com"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              />
            </Form.Group>
            <Form.Group className="pb-5" controlId="message">
              <Form.Label className="h5">Message*</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                placeholder="Send me a message"
              />
            </Form.Group>
            <Button className="submit-button mb-3" type="submit" style={buttonPress} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} id="subButton">Submit form</Button>
          </Form>
          <p>* indicates a required field</p>
        </div>
        <div className="custom-separator order-2"><hr /></div>
        <div className="col-12 col-lg-4 order-1 order-lg-2 text-start contact-right">
          <h1>Let's Create Together</h1>
          <p className="pb-2">Ready to bring your web project to life? I'm here to help you turn your vision into reality.</p>
          <p>You may also email me at <a href="mailto:bklein1981@gmail.com">bklein1981@gmail.com</a></p>
        </div>   
      </div>
    </div>
  )
}