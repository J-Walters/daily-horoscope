import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './client/components/Loading';

const Home = lazy(() => import('./client/components/Home'));
const Zodiac = lazy(() => import('./client/components/Zodiac'));
const Horoscope = lazy(() => import('./client/components/Horoscope'));
const NotFound = lazy(() => import('./client/components/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/zodiac-signs' element={<Zodiac />} />
        <Route path='/zodiac-signs/:sign' element={<Horoscope />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
