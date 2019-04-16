import { fade } from 'mc/styles/colorManipulator';
import { Theme } from 'mc/styles/createMuiTheme';
import createStyles from 'mc/styles/createStyles';

const drawerWidth = 240;
const styles = ({ palette, spacing, breakpoints, shape, transitions, zIndex }: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  title: {
    display: 'none',
    [breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleShift: {
    marginLeft: 16,
  },
  search: {
    position: 'relative',
    borderRadius: shape.borderRadius,
    backgroundColor: fade(palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(palette.common.white, 0.25),
    },
    marginRight: spacing(2),
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

export default styles