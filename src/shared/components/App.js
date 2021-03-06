import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { connect } from 'react-redux'

import NotFound from './NotFound'
import Home from './Home'
import Footer from './Layout/Footer'
import colours from '../styles/export/colours.css'

const AppWrapper = styled.div`
  background-color: ${colours.white};
  overflow: hidden;
  flex: 1;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  order: 0;
  flex-flow: column nowrap;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const App = ({ session }) => (
  <Switch>
    <Route render={props =>
      (
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </AppWrapper>
      )
    } />
  </Switch>
)

const masStateToProps = state => ({
  session: state.session
})

export default connect(masStateToProps)(App)
