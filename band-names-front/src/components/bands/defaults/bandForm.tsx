import React, {useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'

import Modal from '../../modal'

import {
  TextField,
  Button 
} from '@material-ui/core';

import Send from '@material-ui/icons/Send';
import { String } from 'lodash';

function BandForm( {onSubmit}: InferProps<typeof BandForm.propTypes>) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createBand = () =>{
    onSubmit(name)
    setOpen(false)
    setName('')
  }

  return (
    <div className="band-form">
      <Modal labelBtn="Add Band" dialogTitle="Create Band" open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} >
        <TextField id="outlined-basic" value={name} onChange={ (e) => setName(e.target.value) } label="Name Band" variant="outlined" />
        <br/>
        <br/>
        <Button
        onClick={ () => createBand()}
        variant="contained"
        color="primary"
        fullWidth={true}
        endIcon={<Send/>}>
        Save
        </Button>
      </Modal>
    </div>
  )
}

BandForm.propTypes = {
  onSubmit: PropTypes.any.isRequired
}

export default BandForm

