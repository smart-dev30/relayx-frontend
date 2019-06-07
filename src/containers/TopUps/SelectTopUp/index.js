import React, {Component} from 'react';

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

import { Header } from '../../../components';

import { userActionCreators, financeActionCreators } from '../../../actions';

import { styles } from './style';

import { payImages } from '../../../images';

class SelectPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPayment: null
    }
  }

  handleBackPress = () => this.props.history.push('/topups/handle');

  handleNextPress = async () => {
  }

  handleClickPaymentMethod = selectedPayment => () => {
    if (selectedPayment.status === 0) return;
    this.setState({ selectedPayment });
  }

  listItemClassName = item => {
    const { classes } = this.props;
    const { selectedPayment } = this.state;
    if (selectedPayment && selectedPayment.paymentId === item.paymentId) {
      return classes.activeListItem;
    }
    return classes.inactiveListItem;
  }

  listItemTitleClassName = item => {
    const { classes } = this.props;
    const { selectedPayment } = this.state;
    if (selectedPayment && selectedPayment.paymentId === item.paymentId) {
      return classes.activePaymentName;
    }
    return classes.inactivePaymentName;
  }

  render() {
    const { classes, paymentOptions } = this.props;
    const { selectedPayment } = this.state;

    return <div className={classes.container}>
      <div className={classes.content}>
        <Header title="Top Up" />

        <div className={classes.formContent}>
          <Typography variant="body2" className={classes.title}>Choose your Payment Method</Typography>

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
            disabled={!selectedPayment}
            onClick={this.handleNextPress}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = ({ finance }) => ({
  paymentOptions: finance.paymentOptions
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
    getPayOptionsRequest: financeActionCreators.getPayOptionsRequest,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectPayment)));