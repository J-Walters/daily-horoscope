import { useState } from 'react';
import ZodiacCard from './ZodiacCard';
import './Zodiac.css';

const Zodiac = (props) => {
  const [signs, setSigns] = useState([
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
    'aquarius',
    'pisces',
  ]);
  return (
    <div className='sign-container'>
      <header>
        <h1>Choose Your Sun Sign</h1>
      </header>
      <main>
        {signs.map((sign) => (
          <>
            <ZodiacCard key={sign} sign={sign} />
          </>
        ))}
      </main>
      <footer className='unsure-button-container'>
        <button>unsure about your sign?</button>
      </footer>
    </div>
  );
};

export default Zodiac;
