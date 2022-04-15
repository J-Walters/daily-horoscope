import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DownloadButton from './Download';
import Images from '../../horoscope-images/index';
import './Horoscope.css';

import axios from 'axios';
import key from '../../Keys.js';

const Horoscope = () => {
  let params = useParams();
  const [horoscope, setHoroscope] = useState({});

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: `${params.sign}`, day: 'today' },
      headers: {
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': key.apiKey,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setHoroscope({ ...response.data });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [params.sign]);

  return (
    <div className='horoscope-container'>
      <h1>{horoscope.current_date}</h1>
      <main className='reading-container'>
        <section className='first-half-card'>
          <header className='zodiac-title'>
            <h2>{params.sign}</h2>
          </header>
          <figure>
            <img
              className='zo-image'
              src={Images[params.sign]}
              alt={`The zodiac sign ${Images[params.sign]}`}
            />
          </figure>
          <h3 className='zodiac-date'>{horoscope.date_range}</h3>
        </section>
        <div className='division'></div>
        <section className='mid-card'>
          <p>{horoscope.description}</p>
        </section>
        <div className='division'></div>
        <section className='lower-half'>
          <div>
            <h3>Compatibility</h3>
            <p>{horoscope.compatibility}</p>
          </div>
          <div>
            <h3>Lucky Number</h3>
            <p>{horoscope.lucky_number}</p>
          </div>
          <div>
            <h3>Lucky Time</h3>
            <p>{horoscope.lucky_time}</p>
          </div>
          <div>
            <h3>Mood</h3>
            <p>{horoscope.mood}</p>
          </div>
          <div>
            <h3>Color</h3>
            <p>{horoscope.color}</p>
          </div>
        </section>
      </main>
      <footer className='dwnld-footer'>
        <DownloadButton horoscope={horoscope} params={params} />
      </footer>
    </div>
  );
};

export default Horoscope;
