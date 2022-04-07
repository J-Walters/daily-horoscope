import { Routes, Route } from 'react-router-dom';
import Home from './client/components/Home';
import Zodiac from './client/components/Zodiac';
import Horoscope from './client/components/Horoscope';
import NotFound from './client/components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/zodiac-signs' element={<Zodiac />} />
      <Route path='/zodiac-signs/:sign' element={<Horoscope />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
