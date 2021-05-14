import React from 'react'
import './App.css'
import {CardList} from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({monsters: users}));
  }

  searchChange=(event)=>{
    this.setState({searchField: event.target.value}, ()=>{console.log(this.state)})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monsters" searchChange={this.searchChange} />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
