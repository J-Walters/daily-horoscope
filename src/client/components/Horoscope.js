import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  }, []);

  return (
    <div>
      <h1>hello i'm the right sign</h1>
      <h1>{params.sign}</h1>
      <h1>{horoscope.description}</h1>
    </div>
  );
};

export default Horoscope;
