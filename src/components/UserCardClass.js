import React from "react";
class UserCardClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0,
            userInfo : {name : "Dummy"}
        }
        console.log("Child Constructor")
      

    }

    getGitHubData = async () => {
      const response = await fetch("https://api.github.com/users/ashbbdu");
      const data = await response.json();
      console.log(data , "data")
      this.setState({
        userInfo : data
      })
    }

    componentDidMount() {
      this.getGitHubData()
        console.log("Child Component Did Mount")
    }

    componentDidUpdate(prevProps , prevState) {
      // For two dependecy in useEffect
      // if(this.state.count !== prevState.count || this.state.count !== prevState.count2){
        // do something
      // }
      // console.log("Component Did Update")
   this.timer = setInterval(() => {
        console.log("Namaste React Class")
      },1000)
      
    }

    componentWillUnmount () {
      clearInterval(this.timer)
      console.log("Component Will Unmount")
    }
    

  render() {

    const {name , location , public_repos , avatar_url } = this.state.userInfo
    // const {name , location , contact} = this.props;
    const { count } = this.state;
    console.log("Child Render")
    return (
      <div className="user-card-class">
        <img style={{borderRadius : "50%"}} src={avatar_url} alt="profile pic" />
        <h2>Name : {name} </h2>
        <h3>Location : {location} </h3>
        <h4>Total Repositories : {public_repos}</h4>

        {/* <h4>Contact : {contact}</h4> */}
        <h4>Count : {count}</h4>
        <button onClick={() => this.setState({count : count + 1})}>Increment</button>
        <button onClick={() => this.setState({count : count - 1})}>Decrement</button>
      </div>
    );
  }
}

export default UserCardClass