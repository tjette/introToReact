import React from 'react';

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <div className="userCardContainer">
        {
          props.usersData.map((user, index) => (
            <div className="userCard">
              <h3> {user.firstName}</h3>
              <h3>{user.lastName}</h3>
              <img src={user.img} />
            </div>
          )
        )
        }
      </div>
    </div>
  )
}

export default UsersList;
