import { Link } from 'react-router-dom';
// import { Player } from '@lottiefiles/react-lottie-player';
import crystalBall from '../../horoscope-images/crystalBall.png';
import './Home.css';

const Home = (props) => {
  return (
    <div className='home-container'>
      <header className='heading-container'>
        <h1>Daily Horoscope</h1>
        <div className='tagline'>
          <p>get everyday advice on how to navigate the planets</p>
        </div>
      </header>
      <figure className='logo-container'>
        <img src={crystalBall} alt='A crystal ball.' />
        {/* <Player
          autoplay
          loop={true}
          src='https://assets5.lottiefiles.com/packages/lf20_btkj8xsi.json'
          style={{ height: '300px', width: '300px' }}
        ></Player> */}
      </figure>
      <div class='enter-container'>
        <Link to='/zodiac-signs' style={{ textDecoration: 'none' }}>
          <button className='enter'>enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
