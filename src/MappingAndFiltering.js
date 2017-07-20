import React from 'react';
import DATA from './DATA';
const testing = "testing";

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

const Books = (props) => {
  const book = props.books.map(function(book, index){
    return (
            <div key={index}>
              <h1>{book.title} </h1>
              <p> {book.author}</p>
            </div>
    )
  })

  return (
    <div>
      {book}
    </div>
  )
}

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

const MappingAndFiltering = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <h5>{testing}</h5>
        <NamesList names={props.allTheData.names}/>
        <NumbersOver30Under70 numbers={props.allTheData.numbers} />
        <Books books={props.allTheData.books}/>
    </div>
  )
}

export default MappingAndFiltering;
