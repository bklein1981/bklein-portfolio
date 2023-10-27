import React, { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
import { CarouselData } from "./CarouselData";

export default function Portfolio() {
  const [isMobile, setMobile] = useState((window.innerWidth <= 850))

  const styles = {
    carouselContainer: {
      zIndex: "80"
    },
    carouselItem: {
      margin: "3% 0 0",
    },
    img: {
      maxWidth: "980px",
    },
    text: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      padding: "10px",
    },
    mobileText:{
      position: "absolute",
      top: "35%",
      left: "50%",
      transform: "translate(-50%, -0%)",
      zIndex: 2,
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            {CarouselData.map((data, index) => (
              <div key={index} className="row position-relative pb-3">
                <div><img src={data.imageSrc} alt="" className="portfolio-image" /></div>            
                <div style={styles.mobileText}>
                  <div className="col">{data.imageTxt}</div>
                  <div className="row pt-3">
                  <div className="col-6">Helo</div>
                  <div className="col-6">Helo</div>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container-sm carouselContainer">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <Carousel style={styles.carouselItem}>
              {CarouselData.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={data.imageStyle}>
                    <img src={data.imageSrc} style={styles.img} />
                  </div>
                  <div className={data.txtStyle} style={styles.text}>
                    <h4>{data.imageTxt}</h4>
                  </div>
                  <Carousel.Caption>Hello</Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}