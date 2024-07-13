import './App.css';
import Home from './components/Home/home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import CompleteBlog from './components/Blog/CompleteBlog';
import UK from './components/Destinations/UK';
import Australia from './components/Destinations/Australia';
import USA from './components/Destinations/USA';
import Europe from './components/Destinations/Europe';
import Turkey from './components/Destinations/Turkey';
import Study from './components/ServicesPages/Study';
import Visit from './components/ServicesPages/Visit';
import Immigration from './components/ServicesPages/Immigration';
import VisionStatement from './components/Vision/VisionStatement';

function App() {
  return (
    <Router basename='/'>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<CompleteBlog />} />
        <Route path="/destination/uk" element={<UK/>}/>
        <Route path="/destination/australia" element={<Australia/>}/>
        <Route path="/destination/usa" element={<USA/>}/>
        <Route path="/destination/europe" element={<Europe/>}/>
        <Route path="/destination/turkey" element={<Turkey/>}/>
        <Route path="/service/study" element={<Study/>}/>
        <Route path="/service/visit" element={<Visit/>}/>
        <Route path="/service/immigration" element={<Immigration/>}/>
        <Route path="/vision/statement" element={<VisionStatement/>}/>
      </Routes>
    </Router>
  )
}

export default App;
