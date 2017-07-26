import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import Section from './Section';


const App = () => {
  return (
    <div className="app-container">
        <NavBar navLinks={["Home", "About", "Contact", "Blog"]} />
        <Hero />
        <div className="flex-row">
          <Section header={"Home"} content={"Content for the Home Section"}/>
          <Section header={"About"} content={"Content for the Home Section"}/>
          <Section header={"Blog"} content={"Content for the Home Section"}/>
        </div>
    </div>
  )
}

export default App;
