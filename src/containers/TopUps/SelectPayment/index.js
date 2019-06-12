import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

import { Promisify } from '../../../utils';

import { Header, Loader } from '../../../components';

import { financeActionCreators } from '../../../actions';

import { styles } from './style';

import { payImages } from '../../../images';

class SelectPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    await this.getPaymentOptions();
  }

  getPaymentOptions = async () => {
    const { getPayOptionsRequest } = this.props;

    try {
      this.setState({ isLoading: true });
      await Promisify(getPayOptionsRequest, null);
      this.setState({ isLoading: false });
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  handleClickPaymentMethod = selectedPayment => () => {
    if (selectedPayment.status === 0) return;
    const { setPayOption } = this.props;
    setPayOption(selectedPayment)
  }

  listItemClassName = item => {
    const { classes, paymentOption } = this.props;
    if (paymentOption && paymentOption.paymentId === item.paymentId) {
      return classes.activeListItem;
    }
    return classes.inactiveListItem;
  }

  listItemTitleClassName = item => {
    const { classes } = this.props;
    const { paymentOption } = this.props;
    if (paymentOption && paymentOption.paymentId === item.paymentId) {
      return classes.activePaymentName;
    }
    return classes.inactivePaymentName;
  }

  render() {
    const { classes, paymentOptions, paymentOption, onNext, onBack } = this.props;
    const { isLoading } = this.state;

    return (
      <div className={classes.content}>
        <Header title="Top Up" />

        <div className={classes.formContent}>
          <Typography variant="body2" className={classes.title}>Select your Payment Method</Typography>

          <List className={classNames(classes.list, classes.root)}>
            {paymentOptions.map((item, index) => (
              <ListItem
                key={`#payment-option-${item.paymentId}`}
                className={classNames(classes.litItem, this.listItemClassName(item))}
                onClick={this.handleClickPaymentMethod(item)}
                disabled={item.status === 0}
              >
                <ListItemIcon>
                  <img src={payImages[index]} alt="RelayX logo" className={classes.listIcon} />
                </ListItemIcon>
                <Typography className={classNames(classes.paymentName, this.listItemTitleClassName(item))}>
                  {item.paymentName}
                </Typography>
              </ListItem>
            ))}
          </List>
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
            disabled={!paymentOption}
            onClick={onNext}
          >
            Next
          </Button>
        </div>
        <Loader visible={isLoading} />
      </div>
    )
  }
}

const mapStateToProps = ({ finance }) => ({
  paymentOptions: finance.paymentOptions,
  paymentOption: finance.paymentOption,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getPayOptionsRequest: financeActionCreators.getPayOptionsRequest,
    setPayOption: financeActionCreators.setPayOption,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectPayment)));