// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Dice.js component is being imported in the main App.js
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2) constructor is a lifecycle method that runs when a new object is created and pass information along the way, (props) indicates properties and it's needed to pass information downstream.
  constructor(props){
    super(props)
    // 3) this.state is an object with key:value pairs defined for my 3 variables (rollImages, currentPic and diceLog)
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4) line below destructures 2 variables to make them easier to be called in my HandleRoll function
    let { rollImages, diceLog } = this.state
    // 5) define a variable that pick a random number based on the length of rollImages array
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) update the state for the variable newRoll and update the array that containes the log of my rolls with the value from the newRoll variable
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7) render is one of React lyfecycle methods that is needed to render my components/code in the browser
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        {/* 8) line 51 renders the component "Dice" and calls for its code/information */}
        <Dice
          // 9) it runs the HandleRoll method and it's wrapped in a variable called "roll"
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) export defualt + "component name", it's a must have line to export out my component(Board)  and accessed by index.js
export default Board
