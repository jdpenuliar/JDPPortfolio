import React from 'react'
import logo from './logo.svg';
import './App.css';
import './materialize_content/css/materialize.css';
import './materialize_content/css/style.css';
import python001 from './python001.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JD was here
        </p>
        <p>
          He is with a great team now at Facebook
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
