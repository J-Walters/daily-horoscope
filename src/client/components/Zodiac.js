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
      {signs.map((sign) => (
        <div>{sign}</div>
      ))}
    </div>
  );
};

export default Zodiac;
