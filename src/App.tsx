import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateProvider from './context/State.provider';
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import NotFound from './pages/NotFound';

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='intro' element={<Intro />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
