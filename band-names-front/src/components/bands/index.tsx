import React from 'react'
import {BandInterface} from '../../interfaces/bands.interface'

/** */
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
} from '@material-ui/core'

/**Components */
import BandGraphic from './defaults/bandGraphic'
import BandItem from './defaults/bandItem'
import BandForm from './defaults/bandForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


function Bands({bands, loanding, createBand, voteBand}: {bands:BandInterface[], loanding: Boolean, createBand:any, voteBand:any}) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  if(loanding) return (<div>`loanding...`</div>)
  
  return (
    <div>
      <BandGraphic bands={bands} />
      <BandForm onSubmit={createBand} />
      <div className={classes.demo}>
        <List dense={dense}>
          { bands && bands.map((band: BandInterface, i:number) => <BandItem key={i} id={band.id} name={band.name} votes={band.vote} voteBand={voteBand} />)}
        </List>
      </div>
    </div>
  )
}

export default Bands
