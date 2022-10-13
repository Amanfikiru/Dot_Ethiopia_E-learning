
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from './components/register/register';
import Home from './components/home/home';
import Login from './components/login/login';
function App() {  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Registration" element={<Register/>}/>        
        <Route path="Login" element={<Login/>}/>
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

