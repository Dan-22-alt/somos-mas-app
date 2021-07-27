const userIsLogged = () => {
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined') {
    return true;
  }
  return false;
};

export default userIsLogged;
