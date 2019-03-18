import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '../material-ui-barrel'


export const Day = ({ date, inCurrentMonth, children, onClick }) => (
  <div className="day-wrapper" onClick={onClick}>
    <div className={inCurrentMonth ? 'day-faded' : ''}>
      <Typography variant="h6" align="right" gutterBottom>
        {date.getDate()}
      </Typography>
      {children}
    </div>
  </div >
)


Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  /** Is this day in the current month? */
  inCurrentMonth: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
