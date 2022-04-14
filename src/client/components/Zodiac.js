import { useState } from 'react';
import ZodiacCard from './ZodiacCard';
import './Zodiac.css';
import SignModal from './SignModal';

const Zodiac = () => {
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
      <header className='header-container'>
        <h1>Choose Your Sun Sign</h1>
      </header>
      <main className='main-card-container'>
        {signs.map((sign) => (
          <>
            <ZodiacCard key={sign} sign={sign} />
          </>
        ))}
      </main>
      <footer className='unsure-button-container'>
        <button className='unsure-button'>unsure about your sign?</button>
        {/* <SignModal /> */}
      </footer>
    </div>
  );
};

export default Zodiac;
