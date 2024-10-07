import './home.css';
import Lottie from 'lottie-react';
import homeAnimation from '../../assets//homepic.json';
import Data from './Data';
import Social from './Social';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img">
            <Lottie animationData={homeAnimation} />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
