import React from 'react';
import AvoidAuthRedundancies from '../../../features/auth/AvoidAuthRedundancies';
import FormRegistro from '../components/formRegister';

const Registro = () => {
  return (
    <AvoidAuthRedundancies>
      <FormRegistro />
    </AvoidAuthRedundancies>
  );
};

export default Registro;
