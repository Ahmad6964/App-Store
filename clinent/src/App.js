import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero/Hero.jsx';
import Header from './Component/Header/Header.jsx'
import Admin from './Component/Admin/Admin.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
 <>
 
 <Header/>
 <Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/admin' element={<Admin/>}/>
 </Routes>
 </>
  );
}

export default App;
