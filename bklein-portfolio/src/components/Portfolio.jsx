import React, { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
import { CarouselData } from "./CarouselData";

export default function Portfolio() {
  const [isMobile, setMobile] = useState((window.innerWidth <= 850))
  const [hoverGit, setGitHover] = useState(false)
  const [hoverUrl, setUrlHover] = useState(false)

  const handleGitHover = () => {
    setGitHover(true)
  }
  const handleGitUnHover = () => {
    setGitHover(false)
  }

  const handleUrlHover = () => {
    setUrlHover(true)
  }
  const handleUrlUnHover = () => {
    setUrlHover(false)
  }

  const styles = {
    carouselContainer: {
      zIndex: "80"
    },
    carouselItem: {
      margin: "3% 0 0",
    },
    img: {
      maxWidth: "980px",
      opacity: "50%"

    },
    text: {
      background: "#ef8604",
      borderRadius: "13px",
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      padding: "10px",
      fontSize: "30pt",
      fontWeight: "900",
      color: hoverUrl ? "#594d52" : "#fff",
      cursor: hoverUrl ? "pointer" : "default"
    },
    mobileText: {
      background: "#ef8604",
      position: "absolute",
      top: "0%",
      left: "50%",
      transform: "translate(-50%, -0%)",
      zIndex: 2,
      fontSize: "15pt",
      fontWeight: "600",
      color: hoverUrl ? "#594d52" : "#fff",
      cursor: hoverUrl ? "pointer" : "default",
      maxWidth: "92%",
    },
    caption: {
      maxWidth: "91%",
      padding: "0 10px",
      background: "#ef8604",
      position: "absolute",
      top: "0%",
      color: "#fff",
      fontSize: "20pt",
    },
    gitLink: {
      borderRadius: "13px",
      maxWidth: "7%",
      position: "absolute",
      top: "75%",
      fontSize: "35pt",
      background: "#ef8604",
    },
    gitA: {
      color: hoverGit ? "#594d52" : "#fff",
      cursor: hoverGit ? "pointer" : "default",
    },
    gitMobile: {
      textDecoration: "none",
      color: "#594d52"
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
                <a href={data.url} className="mobileA" target="_blank">
                  <div><img src={data.imageSrc} alt="" className="portfolio-image" /></div>
                </a>
                <div style={styles.mobileText}>
                  <div className="col">{data.mainTxt}</div>
                </div>
                <div className="pt-2"><a href={data.gitUrl} style={styles.gitMobile} target="_blank">GitHub Link</a></div>
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
                  <a href={data.url} target="_blank">
                    <div className={data.txtStyle} style={styles.text} onMouseEnter={handleUrlHover} onMouseLeave={handleUrlUnHover}>
                      {data.mainTxt}
                    </div>
                  </a>
                  <div className="row justify-content-center">
                    <div style={styles.caption}>{data.secondaryTxt}</div>
                    <div style={styles.gitLink}><a href={data.gitUrl} target="_blank"><i className="fa-brands fa-github" style={styles.gitA} onMouseEnter={handleGitHover} onMouseLeave={handleGitUnHover}></i></a></div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    )
  }

}