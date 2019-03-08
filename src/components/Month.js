import React from 'react'

import './month.css'

import { Typography } from './material-ui-barrel'


export const Month = ({ dates, today }) => {

  const currentMonth = today.getMonth()

  return (
    <div id="month">
      {dates.map((date, key) => {
        const fadedClass = (date.getMonth() !== currentMonth) ? 'day-faded' : ''

        return (
          <span className={`day-wrapper ${fadedClass}`} key={key}>
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
