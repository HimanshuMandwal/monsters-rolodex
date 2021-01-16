import React,{ Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {  //using this class we can get the access of something called as state which is initialised in the constructor
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
     return (
      <div className="App">
        <CardList>{this.state.monsters.map(monsters =><h1 key={monsters.id}>{monsters.name}</h1>)}   </CardList>
                 {/*if we dont give the id to it then the react is not able to know which object has been changed using setState so the key give the information about which element is updated so it will not update all the element instead update one and re-rendre that only*/}
    </div>
     )
   }
}



// function App() {
//   return (

//   );
// }

export default App;
