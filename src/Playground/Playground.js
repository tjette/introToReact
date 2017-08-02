import React from 'react';
import faker from 'faker';
import Counter from './Counter';
import UsersList from './UsersList';

class Playground extends React.Component {

  state = {
    firstName: null,
    lastName: null,
    img: null,
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
  updateFirstName = (event) => this.setState({firstName: event.target.value})
  updateLastName = (event) => this.setState({lastName: event.target.value})
  updateImg = (event) => this.setState({img: event.target.value})

  handleFormSubmit = (event) => {
    event.preventDefault();
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      img: this.state.img
    }
    console.log(person);
    let users = this.state.users;
    users.push(person);
    console.log(users, "users")
    this.setState({users})
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

  fetchUsersFromServer = () => {
      //Temporary array to hold people
      // for loop to create person and push into temp array
      //set state of users to temporary array

      const temporaryArray = [];

      for(var i=0; i<20; i++){
        temporaryArray.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          img: faker.random.image()
        })
      }
      this.setState({users: temporaryArray})
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.updateFirstName}
          />
          <input
            onChange={this.updateLastName}
          />
          <input
            onChange={this.updateImg}
          />
          <button type="submit">Submit</button>
        </form>

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
