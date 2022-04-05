import './App.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Daily Horoscope</h1>
        <h3>get everyday advice on how to navigate the planets</h3>
      </header>
      <Player
        autoplay
        loop={true}
        src='https://assets5.lottiefiles.com/packages/lf20_btkj8xsi.json'
        style={{ height: '300px', width: '300px' }}
      ></Player>
      <Link to='/horoscopes'>
        <button>Enter</button>
      </Link>
    </div>
  );
}

export default App;
