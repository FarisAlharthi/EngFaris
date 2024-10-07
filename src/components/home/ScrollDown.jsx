const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <i
          className="bx bxs-chevrons-down"
          style={{
            color: 'var(--title-color)',
            fontSize: '18px',
            // marginLeft: '10px',
          }}
        ></i>
        <span className="home__scroll-name">Scroll Down</span>
      </a>
    </div>
  );
};

export default ScrollDown;
