import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AvoidAuthRedundancies from '../../../features/auth/AvoidAuthRedundancies';
import { selectAuth } from '../../../reducers/authReducer';
import FormLogin from '../components/formLogin';

const Login = () => {
  const log = useSelector(selectAuth);
  const history = useHistory();

  const { state } = log;
  const toast = useToast();

  useEffect(() => {
    if (state === 'success') {
      toast({
        description: 'Bienvenido!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push('/backoffice');
    }
    if (state === 'error') {
      toast({
        description: 'Email o contraseña incorrecta',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    console.log(state);
  }, [state, toast, history]);

  return (
    <AvoidAuthRedundancies>
      <FormLogin />
    </AvoidAuthRedundancies>
  );
};

export default Login;
