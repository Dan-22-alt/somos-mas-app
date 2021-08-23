import React from 'react';
import { Redirect } from 'react-router';
import userIsLogged from './userIsLogged';

const AvoidAuthRedundancies = ({ children }) => {
  return <>{userIsLogged() ? <Redirect to="/" /> : children}</>;
};

export default AvoidAuthRedundancies;
