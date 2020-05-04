import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';


const helloWorld = "Hello World. This is a hot module";
const list = [
  {
    id:1,
    title: 'Fallout',
    year: 1997,
    stars: 4,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_(1997)',
  },

  {
    id:2,
    title: 'Fallout 2',
    year: 1998,
    stars: 5,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_2_(1998)'
  },

  {
    id:3,
    title: 'Fallout 3',
    year: 2008,
    stars: 4,
    url: 'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_3_(2008)'
  },
     
  {
    id:4,
    title: 'Fallout: New Vegas',
    year: 2010,
    stars: 5,
    url:'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout:_New_Vegas_(2010)'
  },

  {
    id:5,
    title: 'Fallout 4',
    year: 2015,
    stars: 4,
    url:'https://en.wikipedia.org/wiki/Fallout_(series)#Fallout_4_(2015)',
  }
];

class App extends Component {
  render () {
    return (
     <div className="App">
         {this.state.list.map(item) => {
          <div key={item.id}>
              <span>
              <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.year}</span>
                <span>{item.stars}</span>
                <span>
                  <button onClick={() => this.onDismiss(item.id)} type="button">
                Dismiss
                  </button>
                </span>
            </div>);
            )}
        </div>

     
      );
      } 
}

export default App;
