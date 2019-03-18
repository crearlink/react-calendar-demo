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


/**
 * Dialog for Event Creation and Edition.
 * It displays the corresponding date and provides a text field for the title.
 */
class EventDialogComponent extends React.Component {

  state = {
    title: ''
  }


  componentDidMount() {
    this.setState({ title: this.props.event.title })
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
    this.props.event.date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
      year: 'numeric'
    })


  render() {
    const dialogTitleAction = (this.props.event.key === null) ? 'Insert' : 'Edit'

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
  event: state.events.editingEvent
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({
    closeEvent,
    saveEvent
  }, dispatch)

export const EventDialog = connect(mapStateToProps, matchDispatchToProps)(EventDialogComponent)
