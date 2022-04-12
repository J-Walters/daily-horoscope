import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <main className='not-found-main'>
        <div className='not-found-title'>
          <h1>Not Found 404</h1>
        </div>
        <div className='return-button'>
          {/* <Link to='/'> */}
          <a href='' alt='return button'>
            <span>Return Home</span>
          </a>
          {/* </Link> */}
        </div>
      </main>
    </div>
  );
};

export default NotFound;
