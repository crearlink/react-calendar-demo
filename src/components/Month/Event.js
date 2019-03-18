import React from 'react'
import PropTypes from 'prop-types'

import { Chip } from '../material-ui-barrel'


export const Event = ({ title, onClick, onDelete }) => (
  <Chip
    label={title}
    onClick={onClick}
    onDelete={onDelete}
  />
)


Event.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
