import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './month.css'


import { createEvent, deleteEvent, editEvent } from '../../actions'
import { getFormattedDate } from '../../helpers'

import { EventDialog } from '../EventDialog'

import { Day } from './Day'
import { Event } from './Event'


/**
 * This is the main component and includes the month days and their events.
 */
class MonthComponent extends React.Component {

  handleCreateEvent = date => {
    this.props.createEvent(date)
  }


  handleDeleteEvent = ({ date, key }) => {
    this.props.deleteEvent({ date, key })
  }


  handleEditEvent = ({ date, key }, e) => {
    e.stopPropagation()
    this.props.editEvent({ date, key })
  }


  render() {
    const { dates, today } = this.props
    const currentMonth = today.getMonth()

    return (
      <React.Fragment>
        {this.props.events.isEditingEvent &&
          <EventDialog />
        }
        <div id="month">
          {dates.map(date => {
            const dateKey = getFormattedDate(date)
            const dateEvents = dateKey in this.props.events.days ? this.props.events.days[dateKey] : []

            return (
              <Day
                key={dateKey}
                inCurrentMonth={date.getMonth() !== currentMonth}
                date={date}
                onClick={() => this.handleCreateEvent(dateKey)}
              >
                {dateEvents.map((event, index) => (
                  <Event
                    key={index}
                    title={event.title}
                    onClick={e => this.handleEditEvent({ date: dateKey, key: index }, e)}
                    onDelete={() => this.handleDeleteEvent({ date: dateKey, key: index })}
                  />
                ))}
              </Day>

            )
          }
          )}
        </div>
      </React.Fragment>
    )
  }

}


MonthComponent.propTypes = {
  /** Days of the weeks involved in the current month display */
  dates: PropTypes.array.isRequired,
  today: PropTypes.instanceOf(Date).isRequired
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
