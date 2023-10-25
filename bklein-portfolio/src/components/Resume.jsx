import React, { useState, useEffect } from "react";
import Fade from 'react-bootstrap/Fade';
import Collapse from 'react-bootstrap/Collapse';


export default function Resume() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  const [collapse, collapseOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      collapseOpen(true);
    }, 1500);
  }, []);

  const [pressed, isPressed] = useState(false);

  const handleMouseDown = () => {
    isPressed(true);
  }

  const handleMouseUp = () => {
    isPressed(false);
  }

  const [touch, isTouched] = useState(false);

  const touchDown = () => {
    isTouched(true);
  }

  const touchUp = () => {
    isTouched(false);
  }

  const iconStyle = {
    background: pressed || touch ? '#fff' : '#594d52',
    color: pressed || touch ? '#594d52' : '#fff'
  }

  return (
    <>
      <div className="container-sm">
        <Fade in={open}>
          <div className="row">
            <div className="col-lg-1 col-3">
              <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchStart={touchDown} onTouchEnd={touchUp} className="icon-container" style={iconStyle} >
                <i className="fa-solid fa-floppy-disk download-icon"></i>
              </div>
            </div>
            <div className="col-lg-11 col-9 text-end dev-heading">Development Proficiencies</div>
          </div>
        </Fade>
      </div>
      <div className="container-sm mt-5">
        <Collapse in={collapse}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5">
              <h3 className="text-start">Front-end Technologies</h3>
              <ul className="text-start" id="l-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>JQuery</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Responive Design</li>
              </ul>
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="text-start">Back-end Technologies</h3>
              <ul className="text-start" id="r-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>NoSQL</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  )

}