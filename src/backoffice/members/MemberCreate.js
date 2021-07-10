import React, { Fragment } from 'react'
import './stylesMembers.css'
import FormMembersEdit from './FormMembersEdit'

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
        <Fragment>
            <FormMembersEdit data={data} mode={"create"}></FormMembersEdit>
        </Fragment>
    )
}
export default MembersCreate
