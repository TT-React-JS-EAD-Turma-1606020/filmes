import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Details } from './pages/Details';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/filme/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
