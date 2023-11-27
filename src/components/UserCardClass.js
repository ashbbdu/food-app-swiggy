import React from "react";
class UserCardClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
        console.log("Child Constructor")


    }

    componentDidMount() {
        console.log("Child Component Did Mount")
    }

    

  render() {
    const {name , location , contact} = this.props;
    const { count } = this.state;
    console.log("Child Render")
    return (
      <div className="user-card-class">
        <h2>Name : {name} </h2>
        <h3>Location : {location} </h3>
        <h4>Contact : {contact}</h4>
        <h4>Count : {count}</h4>
        <button onClick={() => this.setState({count : count + 1})}>Increment</button>
        <button onClick={() => this.setState({count : count - 1})}>Decrement</button>
      </div>
    );
  }
}

export default UserCardClass