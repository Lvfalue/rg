import * as React from 'react'
import * as Loadable from 'react-loadable'
import { hot } from 'react-hot-loader/root'
import CssBaseline from 'mc/CssBaseline'
import Loading from 'component/LoadingComponent'
import Content from './AppContent';
// import Bar from './AppBar';
// import Drawer from './AppDrawer';

const Bar = Loadable({
  loader: () => import('./AppBar'),
  loading: Loading,
})
const Drawer = Loadable({
  loader: () => import('./AppDrawer'),
  loading: Loading,
})
// const Content = Loadable({
//   loader: () => import('./AppContent'),
//   loading: Loading,
// })
// const BarAndDrawer = Loadable.Map({
//   loader: {
//     Bar: () => import('./AppBar'),
//     Drawer: () => import('./AppDrawer'),
//   },
//   render: (loaded, props: any) => {
//     const Bar = loaded.Bar.default;
//     const Drawer = loaded.Drawer.default;
//     return (<>
//       <Bar {...props} />
//       <Drawer {...props} />
//     </>)
//   },
//   loading: Loading,
// })


interface State {
  open: boolean
}

class App extends React.Component<any> {
  state: State = {
    open: false,
  }

  setOpen = (bool: boolean) => {
    this.setState({ open: bool });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Bar
          open={this.state.open}
          setOpen={this.setOpen} />
        <Drawer
          setOpen={this.setOpen}
          open={this.state.open} />
        <Content />
      </div>
    )
  }
}

export default hot(App)
