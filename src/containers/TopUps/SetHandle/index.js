import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import { StorageKeys, Promisify, saveToStorage, getFromStorage } from '../../../utils';

import {
  Typography,
  FormControl,
  Input,
  Button,
  Grid,
} from '@material-ui/core';

import { Header } from '../../../components'

import { userActionCreators, financeActionCreators } from '../../../actions';

import { styles } from './style';

class SetHandle extends Component {
  constructor(props) {
    super(props);
    const handle = getFromStorage(StorageKeys.DeviceId, false)
    this.state = {
      handle: handle ? handle.substring(1) : '',
    };
  }

  handleChangeHandle = e => this.setState({ handle: e.target.value });

  handleNextPress = async () => {
    const { receiveAddressRequest, getPayOptionsRequest, onNext } = this.props;
    const handle = `1${this.state.handle}`;

    saveToStorage(StorageKeys.DeviceId, handle);
    try {
      this.setState({ isLoading: true });
      await Promisify(receiveAddressRequest, handle);
      await Promisify(getPayOptionsRequest, null);
      this.setState({ isLoading: false }, onNext);
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { classes } = this.props;
    const { handle } = this.state;

    return (
      <div className={classes.content}>
        <Header title="Top Up" />

        <div className={classes.formContent}>
          <Typography variant="body2">Relay Handle</Typography>
          <Grid container className={classes.handleWrapper} spacing={1}>
            <Typography className={classes.handlePrefix}>1</Typography>

            <Grid item xs={10}>
              <FormControl className={classNames(classes.formControl)}>
                <Input id='handle' value={handle} onChange={this.handleChangeHandle} placeholder="handle" className={classes.inputHandle} />
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <Grid container className={classes.formFooter}>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" className={classes.actionButton}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              classes={{
                label: classes.nextButton
              }}
              className={classNames(classes.actionButton, classes.nextButton)}
              disabled={!handle}
              autoFocus
              onClick={this.handleNextPress}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    )
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