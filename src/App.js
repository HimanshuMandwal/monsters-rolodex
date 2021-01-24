import React,{ Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from'./components/search-box/search-box.component';

class App extends Component {  //using this class we can get the access of something called as state which is initialised in the constructor
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:""
    };

    //this.handleOnChange = this.handleOnChange.bind(this);
    //explicitly define that the handlechange is bind to this of the App class by default
    //in javascript the function is independent of taking the context of anything
    // as this will be hactic that for every method we have to do this to get rid of this we use arrow function which will automatically have the context of the in which they are written
  }

  /* this keyword in javascript represent the context in which it is invoked s */
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //handleOnChange (e) {} to the arrow function
  handleOnChange = (e) => {
    this.setState({searchField: e.target.value});
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
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder = "search monster" handleOnChange= {this.handleOnChange}/>
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
