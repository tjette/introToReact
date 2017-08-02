import React from 'react';

const Counter = (props) => {

  return (
    <div>
      <h1> Counter</h1>
      <h3> counter: {props.counter}</h3>
      <button onClick={() => props.increaseCounter() }> Increase Counter</button>
      <button onClick={() => props.decreaseCounter() }> Decrease Counter</button>
    </div>
  )
}

export default Counter;
