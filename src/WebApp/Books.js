import React from 'react';



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

export default Books;
