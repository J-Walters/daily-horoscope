import { useState } from 'react';
import ZodiacCard from './ZodiacCard';

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
    <div>
      <header>
        <h1>Choose Your Sun Sign</h1>
      </header>
      <main>
        {signs.map((sign) => (
          <ZodiacCard key={sign} sign={sign} />
        ))}
      </main>
      <footer>
        <a
          href='https://en.wikipedia.org/wiki/Astrological_sign#Western_astrological_correspondence_chart'
          target='_blank'
          rel='noreferrer'
        >
          unsure about your sign?
        </a>
      </footer>
    </div>
  );
};

export default Zodiac;
