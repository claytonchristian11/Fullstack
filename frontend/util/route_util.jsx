
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Play = ({ component: Component, path, songPlaying, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
      !songPlaying ? (
        <Component {...props} />
      ) : (
        null
      )
    )} />
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => {
  let currentSong = state.entities.currentSong
  return {
    loggedIn: Boolean(state.session.id),
    songPlaying: Object.keys(currentSong).length === 0 && currentSong.constructor === Object
  }
};

export const PlayRoute = withRouter(connect(mapStateToProps)(Play));

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
