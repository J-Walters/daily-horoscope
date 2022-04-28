import { Fragment } from 'react';
import ZodiacCard from './ZodiacCard';
import './Zodiac.css';

const Zodiac = () => {
  const signs = [
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
  ];
  return (
    <div className='sign-container'>
      <header className='header-container'>
        <h1>Choose Your Sun Sign</h1>
      </header>
      <main className='main-card-container'>
        {signs.map((sign) => (
          <Fragment key={sign}>
            <ZodiacCard sign={sign} />
          </Fragment>
        ))}
      </main>
      <footer className='unsure-button-container'>
        <a
          href='https://en.wikipedia.org/wiki/Astrological_sign#Western_astrological_correspondence_chart'
          target='_blank'
          className='unsure-button'
          rel='noreferrer'
        >
          unsure about your sign?
        </a>
      </footer>
    </div>
  );
};

export default Zodiac;
