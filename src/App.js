import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Header from './components/Header';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
