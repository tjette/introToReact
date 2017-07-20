import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import Section from './Section';


const App = () => {
  return (
    <div className= "appContainer">
      <NavBar navLinks = {["Home", "About", "Contact", "Blog"]} />
      <Hero
      header={"Super Duper Web App"}
      callToAction = {"I built this with React"}
      />
      <Section
      title={"First Title"}
      paragraph={"First Paragraph"}
      />
    </div>
  )
}

export default App;
