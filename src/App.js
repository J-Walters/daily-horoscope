import { Routes, Route } from 'react-router-dom';
import Home from './client/components/Home';
import Zodiac from './client/components/Zodiac';
import NotFound from './client/components/NotFound';
// import ZodiacCard from './client/components/ZodiacC';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/zodiac-signs' element={<Zodiac />} />
      <Route path='/zodiac-signs/:sign' />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
