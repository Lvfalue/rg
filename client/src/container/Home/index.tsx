import * as React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Contact from 'component/Contact'

const Wrapper = styled.div`
  background: light-blue;
  font-size: 4em;
  text-align: center;
  padding: 1em;
`

const Home = ({ match } : { match: any }) => {
  const CONTACT_URL = `${match.path}/contact`;
  return (<>
    <Wrapper>This is home page</Wrapper>
    <Link to={CONTACT_URL}>Contact</Link>
    <Switch>
      <Route path={CONTACT_URL} component={Contact} />
    </Switch>
  </>);
}

export default Home
