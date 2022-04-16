import { Link } from 'react-router-dom';
import crystalBall from '../../horoscope-images/crystalBall.png';
import './Home.css';

const Home = (props) => {
  return (
    <div className='home-container'>
      <header className='heading-container'>
        <h1 className='title'>Daily Horoscope</h1>
        <div className='tagline'>
          <p>get everyday advice on how to navigate the planets</p>
        </div>
      </header>
      <figure className='logo-container'>
        <img src={crystalBall} alt='A crystal ball.' />
      </figure>
      <div className='enter-container'>
        <Link to='/zodiac-signs' style={{ textDecoration: 'none' }}>
          <button className='enter'>enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
