import React, {Component} from 'react';
import './App.css';
import Dice from './dice/Dice';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numberOfDice: '1',
      numberArray: [1]
    }
  }

  onArrayChange = (string) => {
    const newArray = [];
    const inputs = parseInt(string.substring(), 10);
    for (let i = 1; i <= inputs; i++) {
      newArray.push(i);
    }

    this.setState({numberArray: newArray})
  }

  onDiceAmountChange = (e) => {
    this.setState({numberOfDice: e.target.value})
    this.onArrayChange(e.target.value)
  }

  render() {
    return (
    <div className="App">
      <select name="diceAmount" id="diceAmount" form="diceAmountForm" onChange={this.onDiceAmountChange} className="ma4" >
        <option value="1">1 Die</option>
        <option value="2">2 Dice</option>
        <option value="3">3 Dice</option>
        <option value="4">4 Dice</option>
        <option value="5">5 Dice</option>
        <option value="6">6 Dice</option>
        <option value="7">7 Dice</option>
        <option value="8">8 Dice</option>
        <option value="9">9 Dice</option>
        <option value="10">10 Dice</option>
      </select>
      <div className="flex flex-wrap justify-center">
        {this.state.numberArray.map((id) => <Dice key={`${id}`} className="ma0" />)}
      </div>
    </div>
  );
  }

}

export default App;
