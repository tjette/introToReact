import React from 'react';

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <ul>
        {
          props.usersData.map(function(user, index){
            return <li key={index}> {user.name}</li>;
          })
        }
      </ul>
    </div>
  )
}

class Playground extends React.Component {



  state = {
    name: "Travis",
    counter: 0,
    users: null
  }

  increaseCounter(){
    this.setState({
      counter: this.state.counter += 1})
  }

  decreaseCounter(){
    this.setState({
      counter: this.state.counter -= 1
    })
  }
  componentDidMount(){
    this.fetchUsersFromServer();
  }

  fetchUsersFromServer(){
    const users = [
      {name: "Travis", id:1},
      {name: "Hannah", id:2},
      {name: "Mike", id:3},
      {name: "Joseph", id:4}
    ]
    this.setState({users: users})

  setTimeout(() => {
    this.setState({users:users})
  }, 5000)

  }



  render(){
    return (
      <div>
        <h1> My name is: {this.state.name}</h1>
        <h3> counter: {this.state.counter}</h3>
        <button onClick={() => this.setState(this.increaseCounter())}> Increase Counter</button>
        <button onClick={() => this.setState(this.decreaseCounter())}> Decrease Counter</button>
        {
          this.state.users
          ?  <UsersList usersData={this.state.users}/>
          : <h1> Users being loaded</h1>
        }
      </div>
    )
  }
}

export default Playground;

//where does state come from?
//this.setState is used to update state
