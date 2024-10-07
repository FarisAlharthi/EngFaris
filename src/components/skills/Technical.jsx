import React from 'react';

const Technical = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-file-blank"></i>
            <div>
              <h3 className="skills__name"> MS Office</h3>
              <span className="skills__level">Word & PowerPoint & Word </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-brush"></i>
            <div>
              <h3 className="skills__name">UI Design</h3>
              <span className="skills__level">Framer & Figma</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">Frontend</h3>
              <span className="skills__level">React.js</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-code-block"></i>
            <div>
              <h3 className="skills__name">Backend </h3>
              <span className="skills__level">C# & Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
