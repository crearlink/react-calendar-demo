import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './month.css'

import { createEvent, deleteEvent, editEvent } from '../actions'
import { getFormattedDate } from '../helpers'

import { EventDialog } from './EventDialog'
import { Chip, Typography } from './material-ui-barrel'


class MonthComponent extends React.Component {

  constructor(props) {
    super(props)

    this.handleCreateEvent = this.handleCreateEvent.bind(this)
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this)
    this.handleEditEvent = this.handleEditEvent.bind(this)
  }


  handleCreateEvent(date) {
    this.props.createEvent(date)
  }


  handleDeleteEvent({ date, key }) {
    this.props.deleteEvent({ date, key })
  }


  handleEditEvent({ date, key }, e) {
    e.stopPropagation()
    this.props.editEvent({ date, key })
  }


  render() {
    const { dates, today } = this.props
    const currentMonth = today.getMonth()

    return (
      <React.Fragment>
        <EventDialog />
        <div id="month">
          {dates.map(date => {
            const fadedClass = (date.getMonth() !== currentMonth) ? 'day-faded' : ''
            const dateKey = getFormattedDate(date)

            const dateEvents = dateKey in this.props.events.days ? this.props.events.days[dateKey] : []

            return (
              <span
                className={`day-wrapper ${fadedClass}`}
                key={dateKey}
                onClick={() => this.handleCreateEvent(dateKey)}
              >
                <Typography variant="h6" align="right" gutterBottom>
                  {date.getDate()}
                </Typography>
                {dateEvents.map((event, index) => (
                  <Chip
                    key={index}
                    label={event.title}
                    onClick={e => this.handleEditEvent({ date: dateKey, key: index }, e)}
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


MonthComponent.propTypes = {
  dates: PropTypes.array.isRequired,
  today: PropTypes.instanceOf(Date)
}

const mapStateToProps = state => ({
  events: state.events
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({
    createEvent,
    deleteEvent,
    editEvent
  }, dispatch)

export const Month = connect(mapStateToProps, matchDispatchToProps)(MonthComponent)
