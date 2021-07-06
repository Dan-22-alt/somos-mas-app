import React, {Fragment} from 'react'
import FormMembersEdit from '../members/FormMembersEdit'

const Members = () => {

    const datosEjemplo = {
        "id": 24,
        "name": "Marco Fernandez",
        "image": "http://ongapi.alkemy.org/storage/pfYu7pWfTU.jpeg",
        "description": "R.R.H.H",
        "facebookUrl": "https://www.facebook.com/",
        "linkedinUrl": "https://www.linkedin.com/feed/",
        "created_at": "2021-05-28T13:16:23.000000Z",
        "updated_at": "2021-06-22T15:30:18.000000Z",
        "deleted_at": null
        }
    return (
        <Fragment>
            <FormMembersEdit data={datosEjemplo}></FormMembersEdit>
        </Fragment>
    )
}

export default Members
