import { Link } from 'react-router-dom';
import Images from '../../horoscope-images/index';
import './ZodiacCard.css';

const ZodiacCard = (props) => {
  return (
    <div className='card-container'>
      <Link
        to={`/zodiac-signs/${props.sign}`}
        style={{ textDecoration: 'none', cursor: 'default' }}
      >
        <div className='image-container'>
          <img
            src={Images[props.sign]}
            alt={`The zodiac sign ${props.sign}.`}
          />
          <div className='division'></div>
          <div className='sign-btn-container'>
            <p>{props.sign}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ZodiacCard;
