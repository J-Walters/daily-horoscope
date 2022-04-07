import { Link } from 'react-router-dom';

const ZodiacCard = (props) => {
  return (
    <div>
      <Link to={`/zodiac-signs/${props.sign}`}>
        <h6>{props.sign}</h6>
      </Link>
    </div>
  );
};

export default ZodiacCard;
