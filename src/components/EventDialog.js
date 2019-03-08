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


import { closeEvent, insertEvent } from '../actions/index'


class EventDialogComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      isEditingEvent: false
    }
  }



  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isEditingEvent && nextProps.events.isEditingEvent) {
      return {
        title: '',
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
    this.props.insertEvent({ title: this.state.title })
  }



  handleTitleChange = event => {
    this.setState({ title: event.target.value })
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
          <Button onClick={this.handleClose} color="primary">
            Cancel
            </Button>
          <Button onClick={this.handleSave} color="primary">
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
    insertEvent
  }, dispatch)

export const EventDialog = connect(mapStateToProps, matchDispatchToProps)(EventDialogComponent)