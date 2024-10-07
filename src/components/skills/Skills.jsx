import './skills.css';
import Technical from './Technical';
import Soft from './Soft';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        My technical and soft skills levels.
      </span>

      <div className="skills__container container grid">
        <Technical />

        <Soft />
      </div>
    </section>
  );
};

export default Skills;
