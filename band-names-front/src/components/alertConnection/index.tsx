import React, {useState, useEffect} from 'react'
import PropTypes, {InferProps} from 'prop-types'


import Alert from '@material-ui/lab/Alert';

function AlertConnection({online}: InferProps<typeof AlertConnection.propTypes>) {
  return (
    <div>
      {
        online ? 
        <Alert severity="success">Service status: Online</Alert> :
        <Alert severity="error"> Service status: Offline</Alert> 
      }
    </div>
  )
}

AlertConnection.propTypes = {
  online: PropTypes.any
}

export default AlertConnection
