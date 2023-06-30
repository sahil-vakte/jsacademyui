import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Syllabus from './Components/Syllabus/Syllabus';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="body">
    <Navbar/>
    <Routes>
    <Route path='/' element=<HomePage/>/>
    <Route path='/syllabus' element=<Syllabus/>/>
  </Routes>
  <Footer/>

  </div>
  );
}

export default App;
