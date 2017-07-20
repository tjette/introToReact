import React from 'react';
import DATA from './DATA';
import NamesList from './NamesList';
import NumbersOver30Under70 from './NumbersOver30Under70';
import Books from './Books';


const MappingAndFiltering = (props) => {

  return (
    <div>
        <NamesList names={props.allTheData.names}/>
        <NumbersOver30Under70 numbers={props.allTheData.numbers} />
        <Books books={props.allTheData.books}/>
    </div>
  )
}

export default MappingAndFiltering;
