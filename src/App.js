import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar} from "./components/Navbar";
import Footer from './components/Footer';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import NasaPhoto from './pages/SpaceImg';
import './App.css';
import Mygg from './pages/Epic';







function App() {

  return (
  	<Router>
  		<div className = "App">
        <Navbar />
        <Routes>
        	<Route path = '/' element = {<Home/>} />
        	<Route path = '/APOD' element = {<NasaPhoto/>} />
          <Route path = '/Epic' element = {<Mygg/>} />
        	<Route component={<NotFound/>} />	
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
