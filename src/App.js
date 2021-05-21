import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import axios from "axios";


class App extends Component {
  state = {
    employees: [],
    sorted: false,
    searchField: ""
  };

  searchEmployee = last => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const foundEmployee = this.state.employees.filter(a => a.name.last.toLowerCase() === this.state.searchField.toLowerCase() || a.name.first.toLowerCase() === this.state.searchField.toLowerCase());
    console.log(foundEmployee)
    // Set this.state.friends equal to the new friends array
    this.setState({ employees: foundEmployee });
  };
  
  clearSearch = () => {
    this.getEmployees();
  }
  
  getEmployees = () => {
    if (this.state.sorted === false) {
      // not sorted
      axios.get('https://randomuser.me/api/1.3/?results=50&seed=foo')
      .then(res => this.setState({employees: res.data.results}))
      .catch(err => console.log(err));
    } else if (this.state.sorted === true) {
      // sorted
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


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee();
    this.setState({
      searchField: "",
    });
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="column">

            <Wrapper>
              <Title>Employee Directory</Title>
              <form>
                <fieldset>
                  <input type="text" name="searchField" placeholder="Search by first or last name" id="nameField" value={this.state.searchField} onChange={this.handleInputChange}/>
                  <input className="button-primary" type="submit" value="Search" onClick={this.handleFormSubmit}/>
                  <input className="button-clear" type="submit" value="Clear" onClick={this.clearSearch}/>
                </fieldset>
              </form>
              <table>
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name <span onClick={() => {
                      if (this.state.sorted === true) {
                        this.setState({ sorted: false });                        
                      } else {
                        this.setState({ sorted: true });
                      }
                      this.getEmployees();
                    }}><a style={{fontSize:"1rem"}}>SORT</a></span></th>
                    <th>Email</th>
                    <th>Phone Number</th>
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

          </div>
        </div>
      </div>
    );
  }
}




// console.log(EmployeeObj[0]);

// EmployeeObj.map(employee => (
//   console.log('hello')
// ))

export default App;
