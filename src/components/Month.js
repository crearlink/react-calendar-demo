import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './month.css'

import { createEvent, deleteEvent } from '../actions/index'
import { getFormattedDate } from '../helpers'

import { EventDialog } from './EventDialog'
import { Chip, Typography } from './material-ui-barrel'


class MonthComponent extends React.Component {

  constructor(props) {
    super(props)

    this.handleCreateEvent = this.handleCreateEvent.bind(this)
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this)
  }


  handleCreateEvent(date) {
    this.props.createEvent(date)
  }


  handleDeleteEvent({ date, key }) {
    this.props.deleteEvent({ date, key })
  }


  render() {
    const { dates, today } = this.props
    const currentMonth = today.getMonth()

    return (
      <React.Fragment>
        <EventDialog></EventDialog>
        <div id="month">
          {dates.map(date => {
            const fadedClass = (date.getMonth() !== currentMonth) ? 'day-faded' : ''
            const dateKey = getFormattedDate(date)

            const dateEvents = dateKey in this.props.events.days ? this.props.events.days[dateKey] : []

            return (
              <span
                className={`day-wrapper ${fadedClass}`}
                key={dateKey}
                onClick={() => this.handleCreateEvent(date)}
              >
                <Typography variant="h6" align="right" gutterBottom>
                  {date.getDate()}
                </Typography>
                {dateEvents.map((event, index) => (
                  <Chip
                    key={index}
                    label={event.title}
                    onClick={e => e.stopPropagation()}
                    onDelete={() => this.handleDeleteEvent({ date: dateKey, key: index })}
                  />
                ))}
              </span>
            )
          }
          )}
        </div>
      </React.Fragment>
    )
  }

}


const mapStateToProps = state => ({
  events: state.events
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({
    createEvent,
    deleteEvent
  }, dispatch)

export const Month = connect(mapStateToProps, matchDispatchToProps)(MonthComponent)
