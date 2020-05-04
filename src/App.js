import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';


const helloWorld = "Hello World. This is a hot module";

function App() {
  return (
    

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {helloWorld}
        </a>
        <Login />
      </header>
    </div>
  );
}

export default App;
