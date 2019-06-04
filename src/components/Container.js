import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Toolbar,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  colors,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import {logout} from '../actions';
import {config, PermissionValues, Constants} from '../utils';
import PeopleIcon from '@material-ui/icons/People';
import CreditCard from '@material-ui/icons/CreditCard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Auth} from '../services/api';
import {getRoles} from '../actions';
import {NotificationManager, NotificationContainer} from 'react-notifications';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: Constants.DrawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: Constants.DrawerWidth
  },
  active: {
    backgroundColor: colors.grey[50]
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  content: {
    flexGrow: 1,
    overflow: 'scroll',
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class ContainerLayout extends Component {
  state = {
    anchorEl: null,
    mobileOpen: false,
    drawerItems: [],
  };
  componentDidMount() {
    this.updateDrawerItems();
    this.props.roles.length === 0 && this.props.getRoles();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {history, error} = this.props;
    if (!Auth.isAuthenticated()) {
      history.push('/login');
    } else {
      if (error && prevProps.error !== error) {
        console.log('ERROR:', error);
        NotificationManager.error(`${error.message ? error.message : 'Undefined Error! Please try again'}`, 'Error message', 5000);
      }
      if (prevProps.user !== this.props.user && this.props.user) {
        this.updateDrawerItems();
      }
    }
  }

  updateDrawerItems = () => {
    if (!this.props.user || !this.props.user.roleDetail) return;
    const {permissions} = this.props.user.roleDetail;
    let drawerItems = [{
      icon: <DashboardIcon/>,
      text: 'Dashboard',
      to: '/dashboard',
    }];
    if (permissions.includes(PermissionValues.CrudUsers)) {
      drawerItems.push({
        icon: <PeopleIcon/>,
        text: 'Users',
        to: '/users',
        onClick: () => {
          console.log('tap users screen');
        }
      });
    }
    if (permissions.includes(PermissionValues.CrudRecords)) {
      drawerItems.push({
        icon: <CreditCard/>,
        text: 'Deposit',
        to: '/deposit',
        onClick: () => {
          console.log('tap deposit screen');
        }
      });
    }
    this.setState({drawerItems});
  };

  onDrawerToggle = () => {
    this.setState(state => ({mobileOpen: !state.mobileOpen}));
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  onLogout = () => {
    this.handleClose();
    this.props.logout();
  };

  render() {
    const {drawerItems} = this.state;
    const {classes, children} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    const appBar = (
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='Menu'
          onClick={this.onDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant='h6' color='inherit' className={classes.grow}>
          {config.APP_NAME}
        </Typography>
        <>
          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup='true'
            onClick={this.handleMenu}
            color='inherit'
          >
            <AccountCircle/>
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.onLogout}>
              <ListItemIcon>
                <ExitIcon/>
              </ListItemIcon>
              <ListItemText inset primary='Logout'/>
            </MenuItem>
          </Menu>
        </>
      </Toolbar>
    );

    const drawer = (
      <>
        <Hidden xsDown>
          <div className={classes.toolbar}/>
        </Hidden>

        {drawerItems && <List>
          {drawerItems.map(drawerItem => (
            <ListItem
              key={drawerItem.text}
              button
              component={NavLink}
              to={drawerItem.to}
              activeClassName={classes.active}
              onClick={drawerItem.onClick}
            >
              <ListItemIcon>{drawerItem.icon}</ListItemIcon>
              <ListItemText primary={drawerItem.text}/>
            </ListItem>
          ))}
        </List>}
      </>
    );

    return (
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          {appBar}
        </AppBar>

        <nav className={classes.drawer}>
          <Hidden smUp>
            <Drawer
              container={this.props.container}
              variant='temporary'
              open={this.state.mobileOpen}
              onClose={this.onDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {children}
        </main>
        <NotificationContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  roles: state.auth.roles,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getRoles: () => dispatch(getRoles.request()),
});

const enhance = compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ContainerLayout);
