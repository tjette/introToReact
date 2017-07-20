import React from 'react';

const Section = (props) => {
  return (
    <div className="section">
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default Section;
