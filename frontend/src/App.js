import logo from './logo.svg';
import './App.css';
import Register from './components/register';

import { Route,Routes } from "react-router-dom"
import Login from './components/login';
import Dash from './components/dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dash' element={<Dash />} />
      </Routes>
      
    </div>
  );
}

export default App;
