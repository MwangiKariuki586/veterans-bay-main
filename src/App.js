import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Signin from './components/Signin'
function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Hero/>
        <Categories/>
        <FAQ/>
        <Contact/>
    </div>
  )
}
export default App;
