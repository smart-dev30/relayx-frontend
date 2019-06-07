import React, {Component} from 'react';

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

import { Header } from '../../../components';

import { orderActionCreators } from '../../../actions/order';

import { styles } from './style';

import { payImages } from '../../../images';

class SelectPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopUp: null,
    }
  }

  async componentDidMount() {
    const { getOrdersRequest, paymentOption } = this.props;
    if (!paymentOption) return;

    await Promisify(getOrdersRequest, {
      payMode: paymentOption.paymentId,
      status: 0,
      tranType: 1,
    })
  }

  handleTopUpPress = order => () => {
    this.setState({ selectedTopUp: order })
    console.log(order)
  }

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

  handleBackPress = () => this.props.history.push('/topups/select-payment');

  handleNextPress = async () => {}

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
    const { classes, paymentOption } = this.props;
    const { selectedTopUp } = this.state;
    const paymentId = get(paymentOption, 'paymentId', 2) - 2;

    return <div className={classes.container}>
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
              onClick={this.handleBackPress}
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
            onClick={this.handleBackPress}
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
      </div>
    </div>
  }
}

const mapStateToProps = ({ finance, order }) => ({
  paymentOption: finance.paymentOption,
  orders: order.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getOrdersRequest: orderActionCreators.getOrdersRequest,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectPayment)));