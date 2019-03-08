import React from 'react'

import './month.css'


export const Month = ({ dates, today }) => {

  const currentMonth = today.getMonth()

  return (
    <div id="month">
      {dates.map((date, key) => {
        const fadedClass = (date.getMonth() !== currentMonth) ? 'day-faded' : ''

        return (
          <span className={`day-wrapper ${fadedClass}`} key={key}>
            <span className="day-number">
              {date.getDate()}
            </span>
          </span>
        )
      }
      )}
    </div>

  )
}
