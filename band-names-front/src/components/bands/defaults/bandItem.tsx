import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from '@material-ui/core'

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EditIcon from '@material-ui/icons/Edit';

function BandItem({id, name, votes,  voteBand}: InferProps<typeof BandItem.propTypes>) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
        <IconButton color='primary' >
          <FolderIcon />
        </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={'Likes '+votes}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={  () => voteBand(id)} edge="end" aria-label="vote" color="primary">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton edge="end" aria-label="edit" color="primary">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="secondary">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

BandItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  votes: PropTypes.any,
  voteBand: PropTypes.any,
}

export default BandItem
