import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { userActionCreators } from '../../actions';
import {
  Typography,
} from '@material-ui/core';

import { styles } from './style' ;

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.bsvAddress)
  }

  render() {
    return <div>
      <Typography variant='h6' gutterBottom>
        Welcome !
      </Typography>
    </div>
  }
}

const mapStateToProps = ({ main }) => ({
  bsvAddress: main.bsvAddress
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
  },
  dispatch
);

// ({
//   userInit: params => dispatch(userInit.request(params)),
// });

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));