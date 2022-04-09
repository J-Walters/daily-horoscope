import { Link } from 'react-router-dom';
import Images from '../../horoscope-images/index';

const ZodiacCard = (props) => {
  return (
    <div>
      <Link to={`/zodiac-signs/${props.sign}`}>
        <img
          src={Images[props.sign]}
          style={{ height: 150, width: 150 }}
          alt=''
        />
        <h6>{props.sign}</h6>
      </Link>
    </div>
  );
};

export default ZodiacCard;
