import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/auth/Signin'
import Addservice from './components/more services/Addservice';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path='/services' element = {<Categories/>}/>
            <Route path = "/FAQs" element = {<FAQ/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path="/signin" element = {<Signin/>}/>
            <Route path="/addservice" element = {<Addservice/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;
