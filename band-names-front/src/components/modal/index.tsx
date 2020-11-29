import React,{useState} from 'react'
import PropTypes, { InferProps } from 'prop-types'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

function Modal({ children, labelBtn, dialogTitle, open, handleClickOpen, handleClose }: InferProps<typeof Modal.propTypes>) {
  
  return (
    <div>
      <Button className="modal-btn" variant="outlined" color="primary" onClick={handleClickOpen}>
        {labelBtn}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/*
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
          */}
        </DialogActions>
      </Dialog>
    </div>
  )
}

Modal.propTypes = {
  dialogTitle: PropTypes.string,
  labelBtn: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  open: PropTypes.bool.isRequired,
  handleClickOpen: PropTypes.any.isRequired,
  handleClose: PropTypes.any.isRequired
}

export default Modal
