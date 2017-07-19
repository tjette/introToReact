import React from 'react';

const NavBar = (props) => {
  return (
  <nav className="nav">
    <ul className= "navItemContainer">
      {
        props.navLinks.map(function(item){
          return (
              <li>{item}</li>
          )
        })
      }
    </ul>
  </nav>
  )
}

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h3> {props.header}</h3>
      <p> {props.callToAction}</p>
    </div>
  )
}

const Section = (props) => {
  return (
    <div className="section">
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  )
}

const WebApp = () => {
  return (
    <div className= "appContainer">
      <NavBar navLinks = {["Home", "About", "Contact", "Blog"]} />
      <Jumbotron
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

export default WebApp;
