import './App.css';
import HomePage from './components/Home'
import About from './components/Aboout';
import Login from './components/Login'
import Sign from './components/Signup';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Contect from './components/Contect';
import Gallery from './components/Gallery';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;