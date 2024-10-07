const Data = () => {
  return (
    <div className="home__data">
      {/* ✨ */}
      <h1 className="home__title">Faris Alharthi</h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      {/* <p className="home__description">Iam faris Alharthi</p> */}
      <a href="#contact" className="button button--flex">
        Say Hello
        <i
          className=" uil uil-message"
          style={{
            color: 'var(--container-color)',
            fontSize: '1rem',
            marginLeft: '10px',
          }}
        ></i>
      </a>
    </div>
  );
};

export default Data;
