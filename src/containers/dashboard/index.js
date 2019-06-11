import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { userActionCreators } from '../../actions';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import {
  anyPay1Image,
  anypay2Image,
  apkImage,
  appstoreImage,
  appstoreBETAImage,
  case1Image,
  case2Image,
  case3Image,
  circleImage,
  envelopeImage,
  faviconImage,
  featuresImage,
  footerImage,
  googleplayImage,
  grabImage,
  greenpetalImage,
  groupImage,
  headImage,
  linepayImage,
  logoBigImage,
  modernImage,
  msgImage,
  phone_backImage,
  phoneImage,
  phoneBlueImage,
  phoneGreenImage,
  phonePurpleImage,
  phoneRedImage,
  scbImage,
  showcaseImage,
  sponsorImage,
  twitterImage,
} from '../../images'

import { styles } from './style';

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.bsvAddress)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <header className={classes.logoHeader}>
            <img src={logoBigImage} className={classes.logo} alt="logo" />
          </header>
          <Grid container className={classes.row} spacing={2}>
            <Grid item md={8} sm={12}>
              <Typography className={classes.title}>
                The new standard in<br /> open payments
              </Typography>
              <Typography className={classes.description}>
                RelayX Superwallet enables individuals and<br />
                businesses to send and receive money with anyone,<br />
                anywhere,across any platform.
              </Typography>
              <Grid container className={classes.downloadLinks} spacing={3}>
                <Grid item sm={4} xs={12} className={classNames(classes.center)}>
                  <a href="https://play.google.com/store/apps/details?id=com.RelayX">
                    <img className={classes.downloadLink} src={googleplayImage} alt="Google play" />
                  </a>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.center)}>
                  <a href="https://testflight.apple.com/join/XJCahkvx">
                    <img className={classes.downloadLink} src={appstoreImage} alt="Appstore" />
                  </a>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.center)}>
                  <a href="https://www.installonair.com/app-download-link/UlhWAn">
                    <img className={classes.downloadLink} src={apkImage} alt="Raw Apk" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} sm={12} className={classes.center}>
              <div className={classNames(classes.phones)}>
                <img className={classes.phone} src={phoneImage} alt="RelayX Main screen" />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.row} spacing={2}>
            <Grid item md={5} sm={12} className={classes.lowOrder}>
              <Typography className={classes.title}>
                Instant payments
              </Typography>
              <Typography className={classes.description}>
                Send and receive payments over any platform, anywhere. You control your funds too.
              </Typography>
              <div className={classes.instantPays} spacing={2}>
                <img src={linepayImage} alt="Line Pay" />
                <img src={grabImage} alt="Grab Pay" />
                <img src={msgImage} alt="Wechat Pay" />
                <img src={scbImage} alt="Scb Pay" />
                <img src={circleImage} alt="Circle Pay" />
              </div>
            </Grid>
            <Grid item md={7} sm={12}>
              <div className={classNames(classes.phones)}>
                <img className={classes.phone} src={showcaseImage} alt="RelayX Main screen" />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.row} spacing={2}>
            <Typography className={classes.title}>
              Relay One - Accept any payment
            </Typography>
            <Grid item md={6} sm={12} className={classes.lowOrder}>
              <Typography className={classes.subTitle}>
                1% to accept anything
              </Typography>
              <Typography className={classes.description}>
                Whether crypto, Alipay, WeChat, or anything else, it’s the most interoperable and fastest solution.
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <img className={classes.phone} src={anyPay1Image} alt="Payment method" />
            </Grid>
          </Grid>

          <Grid container className={classes.row} spacing={2}>
            <Grid item md={6} sm={12}>
              <Typography className={classes.subTitle}>
                Stay in control
              </Typography>
              <Typography className={classes.description}>
                We don’t hold your funds. All funds go to your 1handle in your RelayX app where you have ownership.
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <img className={classes.phone} src={anypay2Image} alt="Hide wallet" />
            </Grid>
          </Grid>

          <Grid container className={classes.row} spacing={3}>
            <Grid item xs={12} className={classes.center}>
              <Typography className={classes.title}>
                Earn money
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} className={classes.center}>
              <div>
                <img className={classes.phone} src={case1Image} alt="Earning step1" />
              </div>
              <Typography className={classes.payDescription}>
                Handle orders from everyday people and earn on every transaction in real time.
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} className={classes.center}>
              <div>
                <img className={classes.phone} src={case2Image} alt="Earning step2" />
              </div>
              <Typography className={classes.payDescription}>
                Every order is a micro transaction and we give you all the details you need.
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} className={classes.center}>
              <div>
                <img className={classes.phone} src={case3Image} alt="Earning step3" />
              </div>
              <Typography className={classes.payDescription}>
                Flexible hours and you can spend your earnings or withdraw anytime.
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={classes.row} spacing={3}>
            <Grid item xs={12} className={classes.center}>
              <Typography className={classes.title}>
                Get the App
              </Typography>
              <Typography className={classes.description}>
                Start using money the way it was meant to be. Relay in seconds.
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12} className={classNames(classes.center)}>
              <a href="https://play.google.com/store/apps/details?id=com.RelayX">
                <img className={classes.downloadLink} src={googleplayImage} alt="Google play" />
              </a>
            </Grid>
            <Grid item sm={4} xs={12} className={classNames(classes.center)}>
              <a href="https://testflight.apple.com/join/XJCahkvx">
                <img className={classes.downloadLink} src={appstoreImage} alt="Appstore" />
              </a>
            </Grid>
            <Grid item sm={4} xs={12} className={classNames(classes.center)}>
              <a href="https://www.installonair.com/app-download-link/UlhWAn">
                <img className={classes.downloadLink} src={apkImage} alt="Raw Apk" />
              </a>
            </Grid>
          </Grid>
        </div>
        <footer>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ main }) => ({
  bsvAddress: main.bsvAddress
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receiveAddressRequest: userActionCreators.receiveAddressRequest,
  },
  dispatch
);

// ({
//   userInit: params => dispatch(userInit.request(params)),
// });

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));