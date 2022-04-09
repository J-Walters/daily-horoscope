import { Link } from 'react-router-dom';
import Images from '../../horoscope-images/index';
import './ZodiacCard.css';

const ZodiacCard = (props) => {
  return (
    <div className='card-container'>
      <Link to={`/zodiac-signs/${props.sign}`}>
        <div className='image-container'>
          <img
            src={Images[props.sign]}
            alt={`The zodiac sign ${props.sign}.`}
          />
          <div className='division'></div>
          <div className='button-container'>
            <h6>{props.sign}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ZodiacCard;
