import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import * as Loadable from 'react-loadable'
import Loading from 'component/LoadingComponent'

const Home = Loadable({
  loader: () => import('container/Home'),
  loading: Loading,
})

const User = Loadable({
  loader: () => import('container/User'),
  loading: Loading,
})

const AppRoutes = () => {
  return (
    <>
      <div>
        <Link to="/home">Home111</Link>
      </div>
      <div>
        <Link to="/user">User111</Link>
      </div>
      <Route path='/home' component={Home} />
      <Route path='/user' component={User} />
    </>
  )
}

export default AppRoutes

