import { AiOutlineX } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://x.com/EngFarisali"
        className="home__social-icon"
        target="_blank"
      >
        <AiOutlineX />
      </a>

      <a
        href="https://github.com/farisalharthi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"> </i>
      </a>

      <a
        href="https://linkedin.com/in/faris-alharthi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
