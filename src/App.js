import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/auth/Signin'
import Addservice from './components/more services/Addservice';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Plumbing from './components/categories/Plumbing';
import Electrical from './components/categories/Electrical';
import Software from './components/categories/Software';
import Web from './components/categories/Web';
import Tutoring from './components/categories/Tutoring';
import Consultation from './components/categories/Consultation';
import Legal from './components/categories/Legal';
import Babycare from './components/categories/Babycare';
import Carservices from './components/categories/Carservices';
import Realestate from './components/categories/Realestate';
import Therapy from './components/categories/Therapy';
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
            <Route path='/plumbing' element = {<Plumbing/>}/>
            <Route path='/electrical' element = {<Electrical/>}/>
            <Route path='/web' element = {<Web/>}/>
            <Route path='/tutoring' element = {<Tutoring/>}/>
            <Route path='/consultation' element = {<Consultation/>}/>
            <Route path='/legal' element = {<Legal/>}/>
            <Route path='/babycare' element = {<Babycare/>}/>
            <Route path='/carservices' element = {<Carservices/>}/>
            <Route path='/realestate' element = {<Realestate/>}/>
            <Route path='/therapy' element = {<Therapy/>}/>
            <Route path='/software' element = {<Software/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;
