import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import get from 'lodash/get';
import delay from 'lodash/delay'
import classNames from 'classnames';

import {
  Typography,
  Button,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

import QRCode from 'qrcode.react'

import { Promisify, getFromStorage, StorageKeys, TOPUP_TIME_LIMIT } from '../../../utils';

import { Header } from '../../../components';

import { userActionCreators } from '../../../actions/user';
import { orderActionCreators } from '../../../actions/order';

import { styles } from './style';

import { payImages } from '../../../images';

class PayTopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainSeconds: TOPUP_TIME_LIMIT,
    }
  }

  async componentDidMount() {
    const { selectedOrder, bsvAddress, receiveAddressRequest, onBack } = this.props;
    if (!selectedOrder) {
      onBack()
      return
    }
    if (!bsvAddress) {
      await Promisify(receiveAddressRequest, getFromStorage(StorageKeys.DeviceId, false));
    }
    this.reduceRemainSeconds();
  }

  reduceRemainSeconds = () => {
    const { remainSeconds } = this.state;
    const { onBack } = this.props;
    if (remainSeconds > 0) {
      delay(() => {
        this.setState({ remainSeconds: remainSeconds - 1 });
        this.reduceRemainSeconds();
      }, 1000, 'later');
    } else {
      delay(onBack, 1000, 'later');
    }
  }

  handleNextPress = async () => { }

  renderQRCode = () => {
    const { classes, bsvAddress } = this.props;
    const { remainSeconds } = this.state;
    return bsvAddress ? (
      <div className={classes.qrCodeWrapper}>
        <QRCode value={bsvAddress} />
        <Typography className={classes.timer}>
          00:{remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}s
        </Typography>
      </div>
    ) : null
  }

  render() {
    const { classes, paymentOption, selectedOrder, onChangePayOption, onBack } = this.props;
    const paymentId = get(paymentOption, 'paymentId', 2) - 2;

    return (
      <div className={classes.content}>
        <Header title="Top Up" />

        <div className={classes.formContent}>
          <ListItem className={classes.selectedPayOption}>
            <ListItemIcon>
              <img src={payImages[paymentId]} alt="RelayX logo" className={classes.listIcon} />
            </ListItemIcon>

            <Typography className={classes.selectedPayOptionTitle}>
              {paymentOption.paymentName}
            </Typography>

            {selectedOrder && <div className={classes.selectedPayAmountWrapper}>
              <Typography className={classes.selectedPayAmountText}>
                {`${selectedOrder.walletSymbolSign}${selectedOrder.walletSendAmount}`}
              </Typography>
            </div>}

            <Button
              className={classes.buttonChangePayOption}
              onClick={onChangePayOption}
            >
              Change
            </Button>
          </ListItem>

          {this.renderQRCode()}
        </div>

        <div className={classes.formFooter}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.actionButton}
            onClick={onBack}
          >
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            classes={{
              label: classes.nextButton
            }}
            className={
              classNames(classes.actionButton, classes.nextButton)
            }
            onClick={this.handleNextPress}
          >
            Sent
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ order, main, finance }) => ({
  bsvAddress: main.bsvAddress,
  paymentOption: finance.paymentOption,
  selectedOrder: order.selectedOrder,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
    selectOrder: orderActionCreators.selectOrder,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(PayTopUp)));