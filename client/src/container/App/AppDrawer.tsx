import * as React from 'react'
import classNames from 'classnames'
import { withStyles } from 'mc/styles'
import { WithStyles } from 'mc'
import Drawer from 'mc/Drawer'
import IconButton from 'mc/IconButton'
import Divider from 'mc/Divider'
import List from 'mc/List'
import ListItem from 'mc/ListItem'
import ListItemText from 'mc/ListItemText'
import ListItemIcon from 'mc/ListItemIcon'

import InboxIcon from 'mi/Inbox'
import ChevronRightIcon from 'mi/ChevronRight'
import ChevronLeftIcon from 'mi/ChevronLeft'
import MailIcon from 'mi/Mail'

import styles from './AppDrawerStyles'


interface Props {
  open: boolean
  setOpen: Function
  theme: any
}
const AppDrawer = ({ classes, theme, open, setOpen }: Props & WithStyles<typeof styles>) => {
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => setOpen(false)}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default withStyles(styles, { withTheme: true })(AppDrawer)
