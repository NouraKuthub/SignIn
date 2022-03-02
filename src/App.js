import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signin from './Components/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
