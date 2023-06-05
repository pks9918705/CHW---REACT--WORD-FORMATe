

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {

  //state for holding dark
  const [mode,setMode]=useState("light")
   
//function for handlng Toggle BUTTON
const toggleButton =() => {
  
  if(mode === "light"){
    setMode('dark')
  }
  else setMode('light')
}


  return (
    <>


      {/* Navbar */}
      <Navbar
        title="Codiel"
        mode={mode}
        toggleButton={toggleButton}
       
        
      />
      {/* <Navbar /> */}
      {/* form */}
      {/* <div className="container">
      <TextForm heading="Enter the text to analyse" />
      </div> */}
       
      {/* <TextForm heading="Enter the text to analyse" /> */}

      <About mode={mode}/>

       
      
    </>
  );
}

export default App;
