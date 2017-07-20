import React from 'react';

const NumbersOver30Under70 = (props) => {
  const newNums = props.numbers.filter(function(num){
    return num < 70 && num >30;
  })
  .map(function(num,index){
    return <li key={index}>{num}</li>
  })
    return(
      <div>
      <h1>Numbers Over 30 and Under 70</h1>
      <ul>
        {newNums}
      </ul>
      </div>
    )
}

export default NumbersOver30Under70;
