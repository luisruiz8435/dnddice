import React from 'react';
import template from '../images/dnd-dice-logo.png';
import loading from '../images/rollingdice.gif';
import './Dice.css';

const D4Card = ({rollResult, rollDice, diceType, onDiceInput, isLoading, onMultiplierChange}) => {

  return (
    <div className="">
      <select className="" name="dicetype" id="dicetype" form="dicetypeform" onChange={onDiceInput}>
        <option value="d4">D4</option>
        <option value="d6">D6</option>
        <option value="d8">D8</option>
        <option value="d10">D10</option>
        <option value="d12">D12</option>
        <option value="d20">D20</option>
        <option value="d100">D100</option>
      </select>
      <img className="diceimage mt1" alt="" src={template} />
      <div className="flex flex-wrap justify-center">
        <select className="multiplier h2 mt2 f3 bg-transparent gold" name="multiplierChange" id="multiplierChange" form="multiplierChangeForm" onChange={onMultiplierChange} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <h1 className="mt3 mb1 washed-blue">{diceType}</h1>
      </div>

      <button className="mt0 pa2 br-4 hover-bg-gold" onClick={rollDice} >Roll</button>
      <div className="mt2 red" >Result:</div>
      <div className="">
        {
          isLoading === true ? <img className="w-30" alt="" src={loading} id="idk" />: <h1 className="dark-red f1 mt1 mb2">{rollResult}</h1>
        }
      </div>
    </div>
  )
};

export default D4Card;