import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import SetHandle from '../TopUps/SetHandle'
import SelectPayment from '../TopUps/SelectPayment'
import SelectTopUp from '../TopUps/SelectTopUp'
import PayTopUp from '../TopUps/PayTopUp'
import TopUpCompletion from '../TopUps/Completion'

import {
  anyPay1Image,
  apkImage,
  appstoreImage,
  case1Image,
  case2Image,
  case3Image,
  circleImage,
  googleplayImage,
  grabImage,
  headImage,
  linepayImage,
  logoBigImage,
  modernImage,
  msgImage,
  phoneImage,
  phoneBlueImage,
  phoneGreenImage,
  phonePurpleImage,
  phoneRedImage,
  scbImage,
  showcaseImage,
  twitterImage,
  headerImage,
  circleShadeBGImage
} from '../../images'

import { styles } from './style';

const Step = {
  SET_HANDLE: 0,
  SELECT_PAYMENT: 1,
  SELECT_TOPUP: 2,
  TOPUP_PAY: 3,
  TOPUP_COMPLETE: 4,
}

const MAX_STEP = 4

class Dashboard extends Component {
  state = {
    step: Step.SET_HANDLE,
  }

  handleBackPress = () => {
    const { step } = this.state
    if (step > 0) {
      this.setState({ step: step - 1 })
    }
  }

  handleNextPress = () => {
    const { step } = this.state
    if (step < MAX_STEP) {
      this.setState({ step: step + 1 })
    }
  }

  handleChangePayOption = () => this.setState({ step: Step.SELECT_PAYMENT })

  handleCancelPress = () => this.setState({ step: Step.SET_HANDLE })

  render() {
    const { step } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classNames(classes.header, classes.centerContent)} spacing={2}>
          <img className={classes.backgroundImage0} src={headerImage} alt="Background" />
          <Grid item sm={12} xs={12} className={classes.logos}>
            <img src={logoBigImage} className={classes.logo} alt="logo" />
          </Grid>
          {/* <Grid item sm={2} xs={3}>
            <a className={classes.textButton} href="https://play.google.com/store/apps/details?id=com.RelayX">
              <Typography className={classes.textButtonTitle}>
                Contact
              </Typography>
            </a>
          </Grid>
          <Grid item sm={2} xs={3}>
            <a className={classes.textButton} href="https://play.google.com/store/apps/details?id=com.RelayX">
              <Typography className={classes.textButtonTitle}>
                Download
              </Typography>
            </a>
          </Grid> */}
          <Grid item md={6} sm={12} className={classes.centerContent}>
            <Typography className={classNames(classes.title, classes.whiteText)}>
              The new standard in<br /> open payments
              </Typography>
            <Typography className={classNames(classes.description, classes.lightPeriwinkleText)}>
              RelayX Superwallet enables individuals and
              businesses to send and receive money with anyone,
              anywhere,across any platform.
              </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <div className={classes.topUpContainer}>
              <img className={classes.backgroundImageTopContainer} src={circleShadeBGImage} alt="Background" />
              {step === Step.SET_HANDLE && (
                <SetHandle onNext={this.handleNextPress} onBack={this.handleBackPress} />
              )}
              {step === Step.SELECT_PAYMENT && (
                <SelectPayment onNext={this.handleNextPress} onBack={this.handleBackPress} />
              )}
              {step === Step.SELECT_TOPUP && (
                <SelectTopUp
                  onNext={this.handleNextPress}
                  onBack={this.handleBackPress}
                />
              )}
              {step === Step.TOPUP_PAY && (
                <PayTopUp
                  onNext={this.handleNextPress}
                  onCancel={this.handleCancelPress}
                  onChangePayOption={this.handleChangePayOption}
                />
              )}
              {step === Step.TOPUP_COMPLETE && (
                <TopUpCompletion onNext={this.handleCancelPress} />
              )}
            </div>
          </Grid>
        </Grid>

        <div className={classes.content}>
          <Grid container className={classes.centerContent} spacing={2}>
            <img className={classes.backgroundImage1} src={headImage} alt="Background" />
            <Grid item md={8} sm={12} className={classes.lowOrder}>
              <Typography className={classes.title}>
                Top Up &amp; Withdraw
              </Typography>
              <Typography className={classes.description}>
                Load funds from any mobile wallet with our peer to peer settlement solution. Onboarding solved.
              </Typography>
              {/* <Grid container className={classes.downloadLinks} spacing={3}>
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
              </Grid> */}
            </Grid>
            <Grid item md={4} sm={12} className={classes.center}>
              <div className={classNames(classes.phones)}>
                <img className={classes.decorateImage1} src={phoneGreenImage} alt="RelayX Main screen" />
                <img className={classes.decorateImage2} src={phoneBlueImage} alt="RelayX Main screen" />
                <img className={classes.phone} src={phoneImage} alt="RelayX Main screen" />
                <img className={classes.decorateImage3} src={phoneRedImage} alt="RelayX Main screen" />
                <img className={classes.decorateImage4} src={phonePurpleImage} alt="RelayX Main screen" />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.centerContent} spacing={2}>
            <img className={classes.backgroundImage2} src={headImage} alt="Background" />
            <Grid item md={5} sm={12}>
              <Typography className={classes.title}>
                Instant payments
              </Typography>
              <Typography className={classes.description}>
                Send and receive payments over any platform, anywhere. You control your funds too.
              </Typography>
              <div className={classes.instantPays} spacing={2}>
                <img className={classes.instantPay} src={linepayImage} alt="Line Pay" />
                <img className={classes.instantPay} src={grabImage} alt="Grab Pay" />
                <img className={classes.instantPay} src={msgImage} alt="Wechat Pay" />
                <img className={classes.instantPay} src={scbImage} alt="Scb Pay" />
                <img className={classes.instantPay} src={circleImage} alt="Circle Pay" />
              </div>
            </Grid>
            <Grid item md={7} sm={12}>
              <div className={classNames(classes.phones)}>
                <img className={classes.phone} src={showcaseImage} alt="RelayX Main screen" />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.centerContent} spacing={2}>
            <Grid item md={6} sm={12}>
              <img className={classes.phone} src={anyPay1Image} alt="Payment method" />
            </Grid>
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
          </Grid>

          <Grid container className={classes.centerContent} spacing={3}>
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

          <Grid container className={classes.centerContent} spacing={3}>
            <img className={classes.backgroundImage3} src={headImage} alt="Background" />
            <Grid item xs={12} className={classes.center}>
              <Typography className={classes.title}>
                Get the App
              </Typography>
              <Typography className={classes.description}>
                Start using money the way it was meant to be. Relay in seconds.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.centerContent} spacing={3}>
            <Grid item sm={3} xs={12} className={classNames(classes.center, classes.social)}>
              <a href="https://play.google.com/store/apps/details?id=com.RelayX">
                <img className={classes.downloadLink} src={googleplayImage} alt="Google play" />
              </a>
            </Grid>
            <Grid item sm={3} xs={12} className={classNames(classes.center, classes.social)}>
              <a href="https://testflight.apple.com/join/XJCahkvx">
                <img className={classes.downloadLink} src={appstoreImage} alt="Appstore" />
              </a>
            </Grid>
            <Grid item sm={3} xs={12} className={classNames(classes.center, classes.social)}>
              <a href="https://www.installonair.com/app-download-link/d4HSy1">
                <img className={classes.downloadLink} src={apkImage} alt="Raw Apk" />
              </a>
            </Grid>
          </Grid>
        </div>
        <Grid container className={classNames(classes.row, classes.footer)} spacing={3}>
          <Grid item sm={4} xs={12} className={classNames(classes.center)}>
            <a href="https://twitter.com/relayxio"><img className={classes.socialButton} src={twitterImage} alt="Twitter" /></a>
            <a href="https://www.medium.com/@relayx"><img className={classes.socialButton} src={modernImage} alt="Modern" /></a>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.footerDescriptions}>
            <Typography variant="h6" className={classes.footerDescription}> &nbsp;support@relayx.io</Typography>
            <Typography variant="caption" className={classes.footerDescription}> COPYRIGHT &copy; Relay Trade Limited 2019. ALL RIGHTS RESERVED. </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Dashboard));