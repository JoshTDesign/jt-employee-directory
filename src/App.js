import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import axios from "axios";
// import API from "./utils/API";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
    sorted: false
  };
  
  
  
  // not sorted


  // sorted
  getEmployees = () => {
    if (this.state.sorted === false) {
        axios.get('https://randomuser.me/api/1.3/?results=50&seed=foo')
          .then(res => this.setState({employees: res.data.results}))
          .catch(err => console.log(err));
    } else if (this.state.sorted === true) {
        axios.get('https://randomuser.me/api/1.3/?results=50&seed=foo')
          .then(res => {
          this.setState({employees: res.data.results.sort((a,b) => (a.name.last > b.name.last ? 1 : -1))});
          })
          .catch(err => console.log(err));
    } else {
      return 'error';
    };
  };

  
  componentDidMount() {
    this.getEmployees();
  }

  handleBtnClick = (event) => {

  }



  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Employee Directory</Title>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name <span onClick={() => {
                  if (this.state.sorted === true) {
                    this.setState({ sorted: false });
                    // getElementByClass('.arrow').style.transform = 'rotate(90deg)';

                  } else {
                    this.setState({ sorted: true });
                  }
                  this.getEmployees();
                }}><img src='/assets/arrow.svg' className='arrow' width="7px"/></span></th>
                <th>Phone number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => (
              <EmployeeRow
              name={employee.name.first + " " + employee.name.last}
              image={employee.picture.medium}
              phone={employee.phone}
              email={employee.email}
              />
            ))}
            </tbody>
          </table>
      </Wrapper>
    );
  }
}




// console.log(EmployeeObj[0]);

// EmployeeObj.map(employee => (
//   console.log('hello')
// ))

export default App;
