import React from 'react';
import CHATDATA from './CHATDATA'

const Chatter = (props) => {
const chats = CHATDATA.chats.map(function(chat){
  return (
    <div>
    <h3>{chat.username}</h3>
    <p>{chat.chat}</p>
    </div>
  )
})
  return (
    <div className="chatContainer">
      {chats}
    </div>
  )

}

export default Chatter;
