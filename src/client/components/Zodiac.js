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
      <div>
        <h1>Choose Your Sun Sign</h1>
      </div>
      <div>
        {signs.map((sign) => (
          <h4>{sign}</h4>
        ))}
      </div>
      <div>
        <a href='https://en.wikipedia.org/wiki/Astrological_sign#Western_astrological_correspondence_chart'>
          unsure about your sign?
        </a>
      </div>
    </div>
  );
};

export default Zodiac;
