import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


import { closeEvent } from '../actions/index'


class EventDialogComponent extends React.Component {

  handleClose = () => {
    this.props.closeEvent()
  }

  getFormatedDate = () =>
    this.props.events.editingEvent.date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
      year: 'numeric'
    })


  render() {
    return this.props.events.isEditingEvent && (
      <Dialog
        open={true}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Date: {this.getFormatedDate()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
            </Button>
          <Button onClick={this.handleClose} color="primary">
            Save
            </Button>
        </DialogActions>
      </Dialog>
    )
  }

}



const mapStateToProps = state => ({
  events: state.events
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({ closeEvent: closeEvent }, dispatch)

export const EventDialog = connect(mapStateToProps, matchDispatchToProps)(EventDialogComponent)
