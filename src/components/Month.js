import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './month.css'

import { editEvent } from '../actions/index'

import { Typography } from './material-ui-barrel'


class MonthComponent extends React.Component {

  constructor(props) {
    super(props)

    this.handleEditEvent = this.handleEditEvent.bind(this)
  }


  handleEditEvent(date) {
    this.props.editEvent()
  }


  render() {
    const { dates, today } = this.props

    const currentMonth = today.getMonth()

    return (
      <div id="month">
        {dates.map((date, key) => {
          const fadedClass = (date.getMonth() !== currentMonth) ? 'day-faded' : ''

          return (
            <span
              className={`day-wrapper ${fadedClass}`}
              key={key}
              onClick={this.handleEditEvent}
            >
              <Typography variant="h6" align="right" gutterBottom>
                {date.getDate()}
              </Typography>
            </span>
          )
        }
        )}
      </div>

    )
  }

}


const mapStateToProps = state => ({
  events: state.events
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({ editEvent: editEvent }, dispatch)

export const Month = connect(mapStateToProps, matchDispatchToProps)(MonthComponent)
