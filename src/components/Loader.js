import React from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';
import { styles } from './style'

export const Loader = withStyles(styles)(props => 
  props.visible ? (
    <div className={props.classes.loadingContainer}>
      <CircularProgress
        className={props.classes.spinner}
        size={20}
      />
    </div>
  ) : null
);