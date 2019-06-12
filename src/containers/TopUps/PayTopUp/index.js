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

import { Promisify, TOPUP_TIME_LIMIT } from '../../../utils';

import { Header, Loader } from '../../../components';

import {
  userActionCreators,
  orderActionCreators,
  rechargeActionCreators,
} from '../../../actions';

import { styles } from './style';

import { payImages } from '../../../images';

class PayTopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainSeconds: TOPUP_TIME_LIMIT,
      isLoading: false,
    }
  }

  async componentDidMount() {
    const { selectedOrder, getOrderDetailRequest, onCancel } = this.props;
    if (!selectedOrder) {
      onCancel()
      return
    }

    await Promisify(getOrderDetailRequest, {
      serialNumber: selectedOrder.serialNumber,
      type: 2,
    })

    this.reduceRemainSeconds();
  }

  componentWillUnmount() {
    if (this.countDownTimerId) {
      clearTimeout(this.countDownTimerId)
    }
  }

  reduceRemainSeconds = () => {
    const { remainSeconds } = this.state;
    const { onCancel } = this.props;
    if (remainSeconds > 0) {
      this.countDownTimerId = delay(() => {
        this.setState({ remainSeconds: remainSeconds - 1 });
        this.reduceRemainSeconds();
      }, 1000, 'later');
    } else {
      this.countDownTimerId = delay(onCancel, 1000, 'later');
    }
  }

  handleCancelPress = async () => {
    const { setRechargeClose, selectedOrder, onCancel, } = this.props

    try {
      this.setState({ isLoading: true });
      await Promisify(setRechargeClose, { orderNumber: selectedOrder.serialNumber })
      this.setState({ isLoading: false }, onCancel);
    } catch (e) {
      this.setState({ isLoading: false });
      console.log(e);
    }
  }

  handleNextPress = async () => {
    const { getRechargeSend, selectedOrder, onNext } = this.props;

    try {
      this.setState({ isLoading: true });
      await Promisify(getRechargeSend, selectedOrder.serialNumber)
      this.setState({ isLoading: false }, onNext);
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
  }

  renderQRCode = () => {
    const { classes, selectedTopUp } = this.props;
    const { remainSeconds } = this.state;
    return selectedTopUp ? (
      <div className={classes.qrCodeWrapper}>
        {selectedTopUp.jsonInfo && <QRCode value={selectedTopUp.jsonInfo} />}
        <Typography className={classes.timer}>
          00:{remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}s
        </Typography>
      </div>
    ) : null
  }

  render() {
    const { isLoading } = this.state;
    const { classes, paymentOption, selectedOrder, onChangePayOption } = this.props;
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
            onClick={this.handleCancelPress}
          >
            Cancel
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
        <Loader visible={isLoading} />
      </div>
    )
  }
}

const mapStateToProps = ({ order, finance }) => ({
  paymentOption: finance.paymentOption,
  selectedOrder: order.selectedOrder,
  selectedTopUp: order.selectedTopUp,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
    getOrderDetailRequest: orderActionCreators.getOrderDetailRequest,
    setRechargeClose: rechargeActionCreators.setRechargeClose,
    getRechargeSend: rechargeActionCreators.getRechargeSend,
    selectOrder: orderActionCreators.selectOrder,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(PayTopUp)));