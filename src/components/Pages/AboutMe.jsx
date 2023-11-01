import developerImage from '../../assets/images/developer.png';
src/assets/images/developer.png
export default function AboutMe() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5"><img className="about-img" src={developerImage} alt="" /></div>
        <div className="col-12 col-lg-7 text-start">
          <h2>A Little About Me</h2>
          <div  className="about-txt mt-3">
          <p>I am a full-stack web developer based out of greater Chicago. While I have always been interested in web development and coding, I finally took the initiative to switch carrers in 2023 by enrolling in a full-stack web development certificate from Northwestern University.</p>
          <p>Previous to this, I have worked in website content management for the past 12 years. I am a professional graduate and hold an MBA from Northern Illinois University, as well as two undergraduate degrees from the University of Montana. </p>
          <p>A Montana native I moved to the Chicago area in 2010. I married a Chicago girl in 2017 and have one son. Aside from work, I am a Macintosh enthusiast with a large collection of vintage Macs and other computers. I enjoy fly-fishing, reading history books, cycling with my son, and spending time with my family. </p>
          </div>
        </div>
      </div>
    </div>
  )
}