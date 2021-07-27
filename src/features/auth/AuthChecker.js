import React from 'react';
import { Redirect } from 'react-router';
import userIsLogged from './userIsLogged';

const AuthChecker = ({ children, ...rest }) => {
  return <>{userIsLogged() ? children : <Redirect to="/login" />}</>;
};

export default AuthChecker;
