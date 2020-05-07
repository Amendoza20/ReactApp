import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';


const helloWorld = "Hello World. This is a hot module";
const list = [
  {
    game:1,
    title: 'Fallout',
    year: 1997,
    stars: 4,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_(1997)',
  },

  {
    game:2,
    title: 'Fallout 2',
    year: 1998,
    stars: 5,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_2_(1998)'
  },

  {
    game:3,
    title: 'Fallout 3',
    year: 2008,
    stars: 4,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_3_(2008)'
  },
     
  {
    game:4,
    title: 'Fallout: New Vegas',
    year: 2010,
    stars: 5,
    url:'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout:_New_Vegas_(2010)'
  },

  {
    game:5,
    title: 'Fallout 4',
    year: 2015,
    stars: 4,
    url:'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_4_(2015)',
  }
];
 const isSearched = searchTerm => item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

  }

  onDismiss(id) {
    const isNotID = item => item.game !== id; 
    const updatedList = this.state.list.filter(isNotID);
    this.setState({list: updatedList});
    console.log("clicked");
  }
  onSearchChange(event) { 
    this.setState({ searchTerm: event.target.value });
  }


  
  render() {
    const { searchTerm, list } = this.state;
    return (
    
    <div className="App"> 
      {list.map(item => 
          <div key={item.game}>
              <span>
              <a href={item.url}>{item.title}</a>
              </span>
              <button onClick={() => this.onDismiss(item.game)} type="button">Dismiss</button>
              <span>{item.year}</span>
              <span>{item.stars}</span>
          </div>
         )}
         <form>
          <input 
          type="text"
          value={searchTerm}
          onChange={this.onSearchChange}
          />
        </form>
        {list.filter(isSearched(searchTerm)).map( item => item.title)}
    </div>     
    );
  } 
}

export default App;
