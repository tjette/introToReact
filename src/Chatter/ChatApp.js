import React from 'react';

const Chatter = (props) => {
const chats = props.data.chats.map(function(chat){
  return (
    <div>
    <h3>{chat.username}</h3>
    <p>{chat.chat}</p>
    </div>
  )
})
  return (
    <div>
      {chats}
    </div>
  )

}

export default Chatter;
