// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Chronicles from './Chronicles/Chronicles';
import MentalHealth from './Mental-health/MentalHealth';
import Blog from './Blog/Blog';
import ContactUs from './Contact-us/ContactUs';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chronicles' element={<Chronicles />} />
        <Route path='/mental-health' exact element={<MentalHealth />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/contact-us' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
