import React from "react";
// import myusers from './users.json';
import User from "./components/User";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    console.log("constructor");
  }

  getUsers = () => {
    // this.setState({users:myusers})
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ users: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ users: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, this.state);
  }

  render() {
    console.log("render");
    // console.log('users=> ',this.state.users);
    return (
      <div>
        {/*<button onClick={this.getUsers}>Show Users</button>*/}
        <input type="text" placeholder="Search..." />
        <div>
          {this.state.users.map((item) => {
            return <User data={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
