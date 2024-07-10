import './App.css';
import Home from './components/Home/home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import CompleteBlog from './components/Blog/CompleteBlog';

function App() {
  return (
    <Router basename='/'>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<CompleteBlog />} />
      </Routes>
    </Router>
  )
}

export default App;
