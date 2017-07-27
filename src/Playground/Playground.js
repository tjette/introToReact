import React from 'react';
import faker from 'faker';

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
class Playground extends React.Component {

  state = {
    name: "Travis",
    counter: 0,
    users: null,
    showCounter: undefined
  }

  increaseCounter = this.increaseCounter.bind(this);
  decreaseCounter = this.decreaseCounter.bind(this);

  toggleCounter(){
    this.setState({
      showCounter: !this.state.showCounter
    })
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
    const randomName = faker.name.firstName();
    alert(randomName);
    const someProd = faker.commerce.product();
    alert(someProd)
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
        <button className={this.state.showCounter ? "openButton" : "closeButton"}
        onClick={()=> this.toggleCounter()}> {this.state.showCounter ? "Counter open" : "Counter closed"} </button>
        {
          this.state.showCounter
          ? <Counter counter={this.state.counter}
                   increaseCounter={this.increaseCounter}
                   decreaseCounter={this.decreaseCounter}
          /> : null
        }

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
