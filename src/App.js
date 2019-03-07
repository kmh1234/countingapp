import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  render() {
  return (
    <div className="App">
       <div class="container">
        <div class="row">
          <div class="col">
            <h1>Smarties counter</h1>
            </div>
            <div class="col">
            <Counters />
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
