import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import { StorageKeys } from '../../utils/constants';

import {
  Typography,
  IconButton,
  FormControl,
  Input,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { userInit } from '../../actions';

import logo from '../../images/logo.png';

import { styles } from './style' ;

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: '',
    }
  }

  handleChangeHandle = e => this.setState({ handle: e.target.value })

  handleNextPress = () => {
    localStorage.setItem(StorageKeys.DeviceId, this.state.handle)
  }

  render() {
    const { classes } = this.props;
    const { handle } = this.state;

    return <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.logoWrapper}>
            <img src={logo} alt="RelayX logo" className={classes.headerLeftIcon} />
          </div>
          <Typography variant="h6" className={classes.title}>Top Up</Typography>
          <IconButton aria-label="Delete" className={classes.margin}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>

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
  main,
});

const mapDispatchToProps = dispatch => ({
  userInit: params => dispatch(userInit.request(params)),
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));