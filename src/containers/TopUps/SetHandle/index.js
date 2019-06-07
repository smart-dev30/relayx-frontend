import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import { StorageKeys, Promisify, saveToStorage } from '../../../utils';

import {
  Typography,
  FormControl,
  Input,
  Button,
} from '@material-ui/core';

import { Header } from '../../../components'

import { userActionCreators, financeActionCreators } from '../../../actions';

import { styles } from './style' ;

class SetHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: 'maxim',
    };
  }

  handleChangeHandle = e => this.setState({ handle: e.target.value });

  handleNextPress = async () => {
    const { receiveAddressRequest, getPayOptionsRequest } = this.props;
    const handle = `1${this.state.handle}`;

    saveToStorage(StorageKeys.DeviceId, handle);
    try {
      this.setState({ isLoading: true });
      await Promisify(receiveAddressRequest, handle);
      await Promisify(getPayOptionsRequest, null);
      this.setState({ isLoading: false }, () => {
        this.props.history.push('/topups/select-payment')
      });
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { classes } = this.props;
    const { handle } = this.state;

    return <div className={classes.container}>
      <div className={classes.content}>
        <Header title="Top Up"/>

        <div className={classes.formContent}>
          <Typography variant="body2">Relay Handle</Typography>
          <div className={classes.handleWrapper}>
            <Typography className={classes.handlePrefix}>1</Typography>
            <FormControl className={classNames(classes.formControl, classes.inputForm)}>
              <Input id='handle' value={handle} onChange={this.handleChangeHandle} placeholder="handle" className={classes.inputHandle}/>
            </FormControl>
          </div>
        </div>

        <div className={classes.formFooter}>
          <Button variant="contained" color="secondary" className={classes.actionButton} autoFocus>
            Cancel
          </Button>
          <Button 
            variant="contained"
            color="primary"
            classes={{
              label: classes.nextButton
            }}
            className={classNames(classes.actionButton, classes.nextButton)}
            disabled={!handle}
            onClick={this.handleNextPress}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = ({ main }) => ({
  bsvAddress: main.bsvAddress,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
    getPayOptionsRequest: financeActionCreators.getPayOptionsRequest,
  },
  dispatch
);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SetHandle)));