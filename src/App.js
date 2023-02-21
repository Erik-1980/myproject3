import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Basket from './Basket';
import About from './About';
import Catalog from './Catalog';
import Home from './Home';

function App () {
 
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App
