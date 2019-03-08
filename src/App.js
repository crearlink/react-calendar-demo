import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css'

import { getMonthDays } from './helpers'
import store from './store'
import theme from './theme'

import { Month, Typography } from './components'


export default class extends Component {

  constructor() {
    super()
    this.today = new Date()
    this.dates = getMonthDays(this.today)
  }


  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div id="main-wrapper">
            <header>
              <Typography variant="h4">
                {this.today.toLocaleString('en-US', { month: 'long' })}{' '}
                {this.today.toLocaleString('en-US', { year: 'numeric' })}
              </Typography>
            </header>
            <main>
              <Month dates={this.dates} today={new Date()} />
            </main>
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }

}
