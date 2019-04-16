import { Theme } from 'mc/styles/createMuiTheme'
import createStyles from 'mc/styles/createStyles'

const drawerWidth = 240;
const styles = ({ spacing, breakpoints, transitions, mixins }: Theme) => createStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: spacing(7) + 1,
    [breakpoints.up('sm')]: {
      width: spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...mixins.toolbar,
  },
})

export default styles