const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Months Training.</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">2 Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-badge-check about__icon"></i>
        <h3 className="about__title">Courses</h3>
        <span className="about__subtitle">3 Certifications</span>
      </div>
    </div>
  );
};

export default Info;
