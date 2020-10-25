import React, {Component} from 'react';
import './Dice.css';
import D4Card from './D4Card';

class Dice extends Component {
  constructor() {
    super()

    this.state = {
      diceType: 'd4',
      rollResult: 1,
      isLoading: false,
      multiplier: 1
    }
  }

  onDiceInput = (e) => {
    this.setState({diceType: e.target.value})
  }

  onMultiplierChange = (e) => {
    let newMultiplier = parseInt(e.target.value.substring(), 10);
    this.setState({multiplier: newMultiplier})
  }

  rollDice = () => {
    let type = parseInt(this.state.diceType.substring(1), 10);
    let accumulator = 0;

    for (let i = 0; i < this.state.multiplier; i++) {
      let randomizer = Math.floor(Math.random() * type) + 1;
      accumulator+= randomizer
      console.log('added: ', randomizer)
    }
    console.log('total: ', accumulator)
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false});
      this.setState({rollResult: accumulator})
    }, 1000)
  }

  render() {
    const {diceType, rollResult, isLoading} = this.state
    return (
      <div className="tc shadow-3 w-20 ma2">
        <D4Card diceType={diceType} rollResult={rollResult} rollDice={this.rollDice} onDiceInput={this.onDiceInput} isLoading={isLoading} onMultiplierChange={this.onMultiplierChange} />
      </div>
      )
  }
};

export default Dice;