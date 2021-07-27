import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { editByIDOrganization as editOng } from '../../../../reducers/organizationReducer/index';
import { formEditOrgSchema as validationSchema } from '../../validations/formEditOrg';

export const UseFormik = () => {
  const dispatch = useDispatch();
  const ongData = useSelector((state) => state.organization.data);

  const onSubmit = (values) => {
    let body = { id: ongData.id, name: values.name };
    for (const key in values) {
      if (ongData[key] !== values[key]) {
        body = { ...body, [key]: values[key] };
      }
    }
    dispatch(editOng(body));
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
