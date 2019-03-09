import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'


import { closeEvent, saveEvent } from '../actions/index'


class EventDialogComponent extends React.Component {

  state = {
    title: '',
    isEditingEvent: false
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isEditingEvent && nextProps.events.isEditingEvent) {
      return {
        title: nextProps.events.editingEvent.title,
        isEditingEvent: true
      }
    }

    return {
      isEditingEvent: nextProps.events.isEditingEvent
    }
  }


  handleClose = () => {
    this.props.closeEvent()
  }


  handleSave = () => {
    this.props.saveEvent({ title: this.state.title })
  }


  handleTitleChange = event => {
    this.setState({ title: event.target.value })
  }


  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSave()
    }
  }


  getFormatedDate = () =>
    this.props.events.editingEvent.date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
      year: 'numeric'
    })


  render() {
    if (!this.props.events.isEditingEvent) {
      return null
    }

    const dialogTitleAction = (this.props.events.editingEvent.key === null) ? 'Insert' : 'Edit'

    return (
      <Dialog
        open={true}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        onKeyPress={this.handleKeyPress}
      >
        <DialogTitle id="form-dialog-title">{dialogTitleAction} Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Date: {this.getFormatedDate()}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="default">
            Cancel
            </Button>
          <Button onClick={this.handleSave} color="default" variant="outlined">
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
  bindActionCreators({
    closeEvent,
    saveEvent
  }, dispatch)

export const EventDialog = connect(mapStateToProps, matchDispatchToProps)(EventDialogComponent)
