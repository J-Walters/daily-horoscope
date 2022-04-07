import { useParams } from 'react-router-dom';

const Horoscope = () => {
  let params = useParams();
  return (
    <div>
      <h1>hello i'm the right sign</h1>
      <h1>{params.sign}</h1>
    </div>
  );
};

export default Horoscope;
