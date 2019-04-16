import * as React from 'react'
import classNames from 'classnames'
import { WithStyles } from 'mc'
import { withStyles } from 'mc/styles'
import AppBar from 'mc/AppBar'
import Toolbar from 'mc/Toolbar'
import MenuItem from 'mc/MenuItem'
import Menu from 'mc/Menu'
import IconButton from 'mc/IconButton'
import Badge from 'mc/Badge'
import Typography from 'mc/Typography'
import InputBase from 'mc/InputBase'

import Mail from 'mi/Mail'
import NotificationsIcon from 'mi/Notifications'
import AccountCircle from 'mi/AccountCircle'
import More from 'mi/More'
import MenuIcon from 'mi/Menu'
import SearchIcon from 'mi/Search'


import styles from './AppBarStyles'


export interface Props {
  setOpen: Function
  open: boolean
}
export interface State {
  anchorEl: HTMLElement|null
  mobileMoreAnchorEl: HTMLElement|null
}

class MyAppBar extends React.Component<Props & WithStyles<typeof styles>, State> {
  state: State = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, setOpen, open } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={open}>
            <IconButton
              onClick={() => setOpen(true)}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
              color="inherit"
              aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography
              className={classNames(classes.title, {
                [classes.titleShift]: open,
              })}
              variant="h6"
              color="inherit"
              noWrap>
              反清复明
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <More />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    )
  }
}

export default withStyles(styles)(MyAppBar);

