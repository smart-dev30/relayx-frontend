import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { userInit } from '../../actions';
import {
  Typography,
} from '@material-ui/core';

import { styles } from './style' ;

class Dashboard extends Component {
  componentDidMount() {
  }

  render() {
    return <div>
      <Typography variant='h6' gutterBottom>
        Welcome !
      </Typography>
    </div>
  }
}

const mapStateToProps = state => ({
  main: state.main,
});

const mapDispatchToProps = dispatch => ({
  userInit: params => dispatch(userInit.request(params)),
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));