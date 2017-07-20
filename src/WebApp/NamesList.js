import React from 'react';

const NamesList = (props) => {
  var namesItems = props.names.filter(function(name){
    return name.length === 4;
  }).map(function(name,index){
      return <li key={index}> {name} </li>
    })

    return (
      <div>
        <h3>Names</h3>
        <ul>
        {namesItems}
        </ul>
      </div>
    )
}

export default NamesList;
