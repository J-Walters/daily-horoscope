import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import './Home.css';

const Home = (props) => {
  return (
    <div className='home-container'>
      <header className='heading-container'>
        <h1>Daily Horoscope</h1>
        <h3>get everyday advice on how to navigate the planets</h3>
      </header>
      <figure>
        <Player
          autoplay
          loop={true}
          src='https://assets5.lottiefiles.com/packages/lf20_btkj8xsi.json'
          style={{ height: '300px', width: '300px' }}
        ></Player>
      </figure>
      <div class='button-container'>
        <Link to='/zodiac-signs'>
          <button class='button'>Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
