import React, { Fragment } from 'react'
import './stylesMembers.css'
import { useParams } from 'react-router-dom'
import FormMembersEdit from './FormMembersEdit'
import axios from 'axios'
import { useState, useEffect } from 'react';
import ComponentSkeleton from './../../layout/ComponentSkeleton';

const MembersEdit = () => {

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

    const { id } = useParams()
    const [member, setMember] = useState({})
    const [ready, setReady] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getMember = async () => {
            await axios({ method: 'GET', url: process.env.REACT_APP_API_MEMBER + "/" + id })
                .then(consulta => {
                    setMember(consulta.data.data)
                    setReady(true)

                }).catch(error => {
                    console.error(error);
                    setError(true)
                })
        }
        getMember()
    }, [])


    return (
        <Fragment>
            {
                ready ?
                    (<FormMembersEdit data={member}></FormMembersEdit>)
                    :
                    (
                        !error ?
                            (<div className="contenedorMemberEditSkeleton margin-auto">
                                <ComponentSkeleton></ComponentSkeleton>
                            </div>)
                            :
                            (<span> ESTE MIEMBRO NO EXISTE - ERROR 404</span>)
                    )
            }

        </Fragment>
    )
}

export default MembersEdit
