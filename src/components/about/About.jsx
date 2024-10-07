import './about.css';
// @ts-ignore
import EngImage from '../../assets/Pro.png';
// @ts-ignore
import CVf from '../../assets/CV.pdf';
import Info from './Info';
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={EngImage} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            I recently graduated with a degree in Electrical and Computer
            Engineering, from King Abdulaziz University in Saudi Arabia.
            Frontend developer, I create web page UI/UX user interface.
          </p>

          <a download="" href={CVf} className="button button--flex">
            Download CV
            <i
              className=" uil uil-file-alt"
              style={{
                color: 'var(--container-color)',
                fontSize: '1.3rem',
                marginLeft: '10px',
              }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
