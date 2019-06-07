import React from 'react';

import { withStyles, Typography, IconButton, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { logoImage } from '../../images';

import { styles } from './style'

export const Header = withStyles(styles)(props => 
  <div className={props.classes.header}>
    <div className={props.classes.logoWrapper}>
      <img src={logoImage} alt="RelayX logo" className={props.classes.headerLeftIcon} />
    </div>
    <Typography variant="h6" className={props.classes.headerTitle}>{props.title}</Typography>
    <IconButton aria-label="Delete" className={props.classes.margin}>
      <CloseIcon fontSize="small" />
    </IconButton>
  </div>
);