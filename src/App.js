import React,{ Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {  //using this class we can get the access of something called as state which is initialised in the constructor
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:""
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  //this.setState() is a asyncronous function call but to see the changes that wheather the state is
  //changing properly using this.setState() we have a call back function as this.setState({}.()=>{}) which will execute after the state has been changed
  // this is made asynchronous because react automatically chose the best time to update the things
   render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
     return (
      <div className="App">
        <input onChange = {e => this.setState({searchField:e.target.value})} type="search" placeholder="search monster"/>
        <CardList monsters = {filteredMonsters}/>
    </div>
     )
   }
}



// function App() {
//   return (

//   );
// }
//  <input onChange = {e => this.setState({searchField:e.target.value})} type="search" placeholder="search monster"/>
// here we are sending the function not calling it as this is trigred only when the onChange occurs this onChange is a "Synthetic event"
export default App;
