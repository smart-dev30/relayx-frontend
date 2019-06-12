import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import {
  Typography,
  Button,
} from '@material-ui/core';

import { Header } from '../../../components';

import { userActionCreators } from '../../../actions/user';
import { orderActionCreators } from '../../../actions/order';

import { styles } from './style';

class TopUpCompletion extends Component {
  render() {
    const { classes, selectedTopUp, onNext } = this.props;
    const { walletSymbolSign, walletRechargeAmount, walletSendAmount } = selectedTopUp;

    return (
      <div className={classes.content}>
        <Header title="Top Up" />

        <div className={classes.formContent}>
          <Typography variant="h5" className={classes.title}>
            Top up noted
            </Typography>
          <Typography variant="h3" className={classes.amount}>
            {`${walletSymbolSign}${walletSendAmount}`}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            You will receive <strong>{`${walletSymbolSign}${walletRechargeAmount}`}</strong> when you confirmed
          </Typography>
        </div>

        <div className={classes.formFooter}>
          <Button
            variant="contained"
            color="primary"
            classes={{
              label: classes.nextButton
            }}
            className={
              classNames(classes.actionButton, classes.nextButton)
            }
            onClick={onNext}
          >
            Start Over
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ order }) => ({
  selectedTopUp: order.selectedTopUp,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
    selectOrder: orderActionCreators.selectOrder,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(TopUpCompletion)));