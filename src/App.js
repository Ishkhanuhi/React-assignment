
/* The instructions for the assignement are:

1. Create TWO new components: UserInput and UserOutput
2. UserInput should hold an input element, UserOutput two paragraphs
3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
4. Pass a username (of your choice) to UserOutput via props and display it there
5. Add state to the App component (=> the username) and pass the username to the UserOutput component
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9. Add two-way-binding to your input (in UserInput) to also display the starting username
10.Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets */


import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    profession: 'Lecturer'
  };

  state2 = {
    profession: 'Scientist'
  };

  professionSwitchedHandler = (event) => {
    this.setState({profession: event.target.value});
  }
  render ()  {
    return (
       <div className="App">
         <h1> Information:</h1>
         <UserInput 
         switched = {this.professionSwitchedHandler}
         currentProf = {this.state.profession}/>
         <UserOutput profession = {this.state.profession}/> 
         <UserInput
         currentProf = {this.state2.profession}/>
         <UserOutput profession = {this.state2.profession}/>
       </div>
    );
  }
}
export default App;
