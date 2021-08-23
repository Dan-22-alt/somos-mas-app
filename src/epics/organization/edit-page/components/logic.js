import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { editByIDOrganization as editOng } from '../../../../reducers/organizationReducer/index';
import { formEditOrgSchema as validationSchema } from '../../validations/formEditOrg';
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const UseFormik = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();
  const ongData = useSelector((state) => state.organization.data);

  const onSubmit = (values) => {
    let body = { id: ongData.id, name: values.name };
    for (const key in values) {
      if (ongData[key] !== values[key]) {
        body = { ...body, [key]: values[key] };
      }
    }

    dispatch(editOng(body));
    history.push('/backoffice/Organization');
    toast({
      description: 'Se ha editado con exito!',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const initialValues = {
    id: '',
    name: '',
    short_description: '',
    long_description: '',
    logo: '',
    facebookLink: '',
    instagramLink: '',
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  useEffect(() => {
    if (ongData?.id) {
      for (const key in formik.values) {
        formik.setFieldValue(key, ongData[key]);
      }
    }
    // eslint-disable-next-line
  }, [ongData]);
  return formik;
};
