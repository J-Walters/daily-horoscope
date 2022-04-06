import { Routes, Route } from 'react-router-dom';
import Home from './client/components/Home';
import Zodiac from './client/components/Zodiac';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/horoscopes' element={<Zodiac />} />
    </Routes>
  );
}

export default App;
