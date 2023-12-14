import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/Signin'
import Addservice from './components/Addservice';
import Home from './components/Home';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path="/signin" element = {<Signin/>}/>
            <Route path="/addservice" element = {<Addservice/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;
