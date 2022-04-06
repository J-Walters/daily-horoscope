const signs = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

const Zodiac = (props) => {
  return (
    <div>
      <header>
        <h1>Choose Your Sun Sign</h1>
      </header>
      <main>
        {signs.map((sign) => (
          <h4 onClick={null}>{sign}</h4>
        ))}
      </main>
      <footer>
        <a href='https://en.wikipedia.org/wiki/Astrological_sign#Western_astrological_correspondence_chart'>
          unsure about your sign?
        </a>
      </footer>
    </div>
  );
};

export default Zodiac;
