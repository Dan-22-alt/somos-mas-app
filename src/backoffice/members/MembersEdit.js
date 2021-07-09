import React, { Fragment } from 'react'
import './stylesMembers.css'
import { useParams } from 'react-router-dom'
import FormMembersEdit from './FormMembersEdit'
import axios from 'axios'
import { useState, useEffect } from 'react';
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import { getData } from '../../services/membersService'

const MembersEdit = () => {
  const { id } = useParams()
  const [member, setMember] = useState({})
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // const getMember = async () => {
    //   await axios({ method: 'GET', url: process.env.REACT_APP_API_MEMBER + "/" + id })
    //     .then(consulta => {
    //       setMember(consulta.data.data)
    //       setReady(true)

    //     }).catch(error => {
    //       console.error(error);
    //       setError(true)
    //     })
    // }
    // getMember()
    getData(id).then(res => {
      console.log(res);
      setMember(res.data)
      setReady(true)

    }).catch(error => {
      console.error(error);
      setError(true)
    })
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
