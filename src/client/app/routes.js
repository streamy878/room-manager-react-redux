import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './containers/app'
import Rooms from './components/rooms'
import LoginContainer from './containers/login'
import NotFound from './components/not-found'
import RoomDetails from './components/room-details'
import requireAuthentication from './containers/authenticated-component'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRedirect to='rooms' /> 
      <Route path='/rooms' component={requireAuthentication(Rooms)} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/details/:id' component={RoomDetails} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)