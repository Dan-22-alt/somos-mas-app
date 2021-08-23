import React from 'react';
import FormMembersEdit from '../components/form-members/FormMembers';
import '../components/form-members/stylesMembers.css';

const MembersCreate = () => {
  const data = {
    name: '',
    description: '',
    image: '',
    facebookUrl: '',
    linkedinUrl: '',
  };
  return <FormMembersEdit data={data} mode={'create'}></FormMembersEdit>;
};
export default MembersCreate;
