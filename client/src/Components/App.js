// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
