import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id: "Green", value: 5},
      {id: "Red", value: 2},
      {id: "Blue", value: 3},
      {id: "Yellow", value: 0}
    ]
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => 
        <Counter key={counter.id} value={counter.value} 
        id={counter.id}/> )}

      </div>);
  }
}

export default Counters;