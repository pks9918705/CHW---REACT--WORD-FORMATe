

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//react router
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";




function App() {

  //state for holding dark
  const [mode, setMode] = useState("light")

  //function for handlng Toggle BUTTON
  const toggleButton = () => {

    if (mode === "light") {
      setMode('dark')
    }
    else setMode('light')
  }


  return (
    <>

     <BrowserRouter>
     <Navbar
        title="Codiel"
        mode={mode}
        toggleButton={toggleButton}
    />
      <Routes>
        {/* exact is used to match the exact route  */}
        <Route exact path="/about" element={  <About mode={mode} />} />
        <Route exact path="/" element={ <TextForm heading="Enter the text to analyse" />} />
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
