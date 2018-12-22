import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
        {id: 1, value: 5},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  };

  handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
    //instancia um novo array, não contendo o counter de id selecionado
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    // sobrescreve o array do state co o que acabamos de criar
    this.setState({counters});

  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter)=> 
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                counter={counter} 
            />
        )}
      </div>
    );
  }
}

export default Counters;
