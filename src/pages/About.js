import React from "react";
import UserCardClass from "../components/UserCardClass";
import UserCard from "../components/UserCard";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }

  componentDidMount() {
    console.log("Parent Component Did Mount")
}

  render() {
    console.log("Parent Render")
    return (
      <>
        <UserCard name={"Ashish Srivastava (Functional)"} />
        <UserCardClass
          name={"Ashish Srivastava (Class)"}
          location={"Lucknow , UP"}
          contact={"7007823127"}
        />
      </>
    );
  }
}

// const About = () => {
//   return (
// <>
//   <UserCard name={"Ashish Srivastava (Functional)"} />
//   <UserCardClass name={"Ashish Srivastava (Class)"} location={"Lucknow , UP"} contact={"7007823127"}  />
// </>
//   )
// }

export default About;
