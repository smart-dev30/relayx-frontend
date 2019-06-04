import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

class AlertDialog extends React.Component {

  render() {
    const {title, message, disagreeButtonTitle, agreeButtonTitle} = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onDisagree} color="primary">
            {disagreeButtonTitle ? disagreeButtonTitle : 'No'}
          </Button>
          <Button onClick={this.props.onAgree} color="primary" autoFocus>
            {agreeButtonTitle ? agreeButtonTitle : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseAlert: PropTypes.func.isRequired,
  onDisagree: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  agreeButtonTitle: PropTypes.string,
  disagreeButtonTitle: PropTypes.string,
};

export default AlertDialog;