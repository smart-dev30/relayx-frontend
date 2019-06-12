import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import get from 'lodash/get';
import classNames from 'classnames';

import {
  Typography,
  Button,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

import { Promisify } from '../../../utils';

import { Header, Loader } from '../../../components';

import { orderActionCreators, rechargeActionCreators } from '../../../actions';

import { styles } from './style';

import { payImages } from '../../../images';

class SelectPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopUp: null,
      isLoading: false,
    }
  }

  async componentDidMount() {
    await this.getTopUpOrders()
  }

  getTopUpOrders = async () => {
    const { getOrdersRequest, paymentOption } = this.props;
    if (!paymentOption) return;

    return Promisify(getOrdersRequest, {
      payMode: paymentOption.paymentId,
      status: 0,
      tranType: 1,
    });
  }

  handleTopUpPress = order => () => this.setState({ selectedTopUp: order });

  getOrderClass = order => {
    const { selectedTopUp } = this.state;
    const { classes } = this.props;
    if (get(selectedTopUp, 'serialNumber') === order.serialNumber) {
      return classNames(classes.orderItem, classes.activeOrderItem);
    } else {
      return classNames(classes.orderItem, classes.inactiveOrderItem);
    }
  }

  getOrderTextClass = order => {
    const { selectedTopUp } = this.state;
    const { classes } = this.props;
    if (get(selectedTopUp, 'serialNumber') === order.serialNumber) {
      return classNames(classes.orderText, classes.activeOrderText);
    } else {
      return classes.orderText;
    }
  }

  handleNextPress = async () => {
    const { selectedTopUp } = this.state;
    const { onNext, getRechargeInfo, selectOrder } = this.props;

    try {
      this.setState({ isLoading: true });

      selectOrder(selectedTopUp);
      await Promisify(getRechargeInfo, selectedTopUp.serialNumber);
      this.setState({ isLoading: false }, onNext);
    } catch (e) {
      console.log(e);
      this.setState({ selectedTopUp: null });
      await this.getTopUpOrders();
      this.setState({ isLoading: false });
    }
  }

  renderOrders = () => {
    const { classes, orders } = this.props;
    return <div className={classes.orderList}>
      {
        orders.map(order => (
          <ListItem
            key={`#topup-${order.serialNumber}`}
            className={this.getOrderClass(order)}
            onClick={this.handleTopUpPress(order)}
          >
            <Typography className={this.getOrderTextClass(order)}>
              {`${order.walletSymbolSign}${order.walletSendAmount}`}
            </Typography>
          </ListItem>
        ))
      }
    </div>
  }

  render() {
    const { classes, paymentOption, onBack } = this.props;
    const { selectedTopUp, isLoading } = this.state;
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

            <Button
              className={classes.buttonChangePayOption}
              onClick={onBack}
            >
              Change
            </Button>
          </ListItem>

          <Typography variant="body2" className={classes.title}>Choose your Top Up amount</Typography>

          {this.renderOrders()}
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
            disabled={!selectedTopUp}
            onClick={this.handleNextPress}
          >
            Next
          </Button>
        </div>
        <Loader visible={isLoading} />
      </div>
    )
  }
}

const mapStateToProps = ({ finance, order }) => ({
  paymentOption: finance.paymentOption,
  orders: order.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getOrdersRequest: orderActionCreators.getOrdersRequest,
    selectOrder: orderActionCreators.selectOrder,
    getRechargeInfo: rechargeActionCreators.getRechargeInfo,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectPayment)));