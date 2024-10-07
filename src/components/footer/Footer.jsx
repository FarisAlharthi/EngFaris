import React from 'react';
import { AiOutlineX } from 'react-icons/ai';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Eng.Faris</h1>

        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul> */}

        <div className="footer__social">
          <a
            href="https://x.com/EngFarisAli"
            className="footer__social-link"
            target="_blank"
          >
            <AiOutlineX />
          </a>

          <a
            href="https://github.com/farisalharthi"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"> </i>
          </a>

          <a
            href="https://linkedin.com/in/faris-alharthi"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          👉🏻 Eng.Faris | All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
