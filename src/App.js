import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css'

import { getMonthDays } from './helpers'
import theme from './theme'

import { Month } from './components'
import { Typography } from './components/material-ui-barrel'


export default class extends Component {

  constructor() {
    super()
    this.today = new Date()
    this.dates = getMonthDays(this.today)
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id="main-wrapper">
          <header>
            <Typography variant="h4">
              {this.today.toLocaleString('en-US', { month: 'long' })}{' '}
              {this.today.toLocaleString('en-US', { year: 'numeric' })}
            </Typography>
          </header>
          <main>
            <Month dates={this.dates} today={new Date()}></Month>
          </main>
        </div>
      </MuiThemeProvider>
    )
  }

}
