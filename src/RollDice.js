import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';
const numberToWords = require('number-to-words');

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    };
  }

  roll = () => {
    // pick 2 new rolls
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    // convert this 2 new rolls in word
    let newDie1 = numberToWords.toWords(num1);
    let newDie2 = numberToWords.toWords(num2);
    // set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    // wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={this.state.die2} rolling={this.state.rolling} />
          <Die face={this.state.die1} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice !'}
        </button>
      </div>
    );
  }
}
