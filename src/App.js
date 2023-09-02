// App.js
import React from 'react';
import './App.css';                       
import ImageSlider from './comps/ImageSlider';
import LandingForm from './comps/LandingForm';
import CenteredText from './comps/CenteredText';
import NavBar from './comps/NavBar';
import ImageComponent from './comps/ImageComponent';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageSlider />
    <CenteredText/>
     <ImageComponent/>
        {/* <LandingText /> */}
      <LandingForm />
    </div>
  );
}

export default App;
