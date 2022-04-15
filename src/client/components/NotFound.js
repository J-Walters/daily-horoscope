import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <main className='not-found-main'>
        <h1>404</h1>
        <h2>Looks like you're lost</h2>
        <p>the page you are looking for is not available</p>
        <Link to='/'>
          <button className='not-found-button'>
            <span>Return Home</span>
          </button>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
