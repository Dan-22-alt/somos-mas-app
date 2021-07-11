import React, { Fragment } from 'react'
import './stylesMembers.css'
import FormMembersEdit from './FormMembers'

const MembersCreate = () => {
    const data =
    {
        name: '',
        description: '',
        image: '',
        facebookUrl: '',
        linkedinUrl: ''
    }
    return (
        <FormMembersEdit data={data} mode={"create"}></FormMembersEdit>
    )
}
export default MembersCreate
