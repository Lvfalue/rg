import * as React from 'react'
import { WithStyles } from 'mc'
import { withStyles } from 'mc/styles'
import createStyles from 'mc/styles/createStyles'
import { Theme } from 'mc/styles/createMuiTheme'
import Routes from './AppRoutes'


const styles = (theme: Theme) => createStyles({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

const AppContent = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* breadcrum */}
      {/* router */}
      <Routes />
    </main>
  )
}

export default withStyles(styles)(AppContent)
