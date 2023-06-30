import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Syllabus from './Components/Syllabus/Syllabus';

function App() {
  return (
    <div className="body">
    <Navbar/>
    <Routes>
    <Route path='/' element=<HomePage/>/>
    <Route path='/syllabus' element=<Syllabus/>/>
  </Routes>
  </div>
  );
}

export default App;
