

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>


      {/* Navbar */}
      <Navbar
        title="Codiel"
      />
      {/* <Navbar /> */}
      {/* form */}
      {/* <div className="container">
      <TextForm heading="Enter the text to analyse" />
      </div> */}
       
      <TextForm heading="Enter the text to analyse" />
       
      
    </>
  );
}

export default App;
