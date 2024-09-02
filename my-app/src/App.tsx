import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Quiz1 from './components/Quiz1';
import Register from './components/register';
import Login from './components/login';
import Quiz2 from './components/Quiz2';
import HardQuiz from './components/HardQuiz'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Quiz1">Quiz1</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Quiz2">Quiz2</Link>
            </li>
            <li>
              <Link to="/HardQuiz">HardQuiz</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Quiz1" element={<Quiz1 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Quiz2" element={<Quiz2 />} />
          <Route path="/HardQuiz" element={<HardQuiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
