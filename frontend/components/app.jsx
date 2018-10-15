import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Navbar from './navbar/navbar_container';
import Stream from './stream/stream_container';
import Upload from './songs/song_upload_container';
import Player from './songs/song_player';

const App = () => (
  <div>
      <ProtectedRoute path="/" component={Navbar} />
    <Switch>
      <ProtectedRoute exact path="/play" component={Player} />
      <ProtectedRoute exact path="/upload" component={Upload} />
      <ProtectedRoute exact path="/home" component={Stream} />
      <AuthRoute exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
