import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
      <header className='header'>
        <h1>{horoscope.current_date}</h1>
      </header>
      <div className='reading-container'>
        <div className='zodiac-name'>
          <h1>{params.sign}</h1>
        </div>
        <h1>{horoscope.date_range}</h1>
        <img
          src={Images[params.sign]}
          alt={`The zodiac sign ${Images[params.sign]}`}
        />
        <div className='division'></div>
        <h1 className='description'>{horoscope.description}</h1>
        <div className='division'></div>
        <h2>Compatibility</h2>
        <h2>{horoscope.compatibility}</h2>
        <h2>Lucky Number</h2>
        <h2>{horoscope.lucky_number}</h2>
        <h2>Mood</h2>
        <h2>{horoscope.mood}</h2>
      </div>
      <div className='download-container'>
        <button className='download-button'>Download Todays Reading</button>
      </div>
    </div>
  );
};

export default Horoscope;
