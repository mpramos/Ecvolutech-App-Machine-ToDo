/**! Alejandro 
 * Caleb
*/
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
