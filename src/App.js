import React, { Component } from 'react'
import './App.css'

import { Month } from './components'
import { getMonthDays } from './helpers'



export default class extends Component {

  constructor() {
    super()
    this.dates = getMonthDays(new Date())
  }


  render() {
    return (
      <div className="App">
        <Month dates={this.dates} today={new Date()}></Month>
      </div>
    )
  }

}
