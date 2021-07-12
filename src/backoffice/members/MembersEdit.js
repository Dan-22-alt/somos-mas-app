import React, { Fragment } from 'react'
import './stylesMembers.css'
import { useParams } from 'react-router-dom'
import FormMembersEdit from './FormMembers'
import { useState, useEffect } from 'react';
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import { getMember } from '../../services/membersService'
import ErrorMessage from '../../components/alert/ErrorMessage';
import { CenterBox } from './../../components/CenterBox/index';

const MembersEdit = () => {
  const { id } = useParams()
  const [member, setMember] = useState({})
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getMember(id).then(res => {
      setMember(res.data)
      res.data.name ? (setReady(true)) : setReady(false)
    }).catch(error => {
      setError(true)
      return error
    })
  }, [])
  return (
    <Fragment>
      {
        ready ?
          (<FormMembersEdit data={member} mode={"edit"} />)
          :
          (!error ?
            (<div className="contenedorMemberEditSkeleton margin-auto">
              <ComponentSkeleton />
            </div>)
            :
            (<CenterBox children={<ErrorMessage message={"ESTE MIEMBRO NO EXISTE - ERROR 404"}></ErrorMessage>}></CenterBox>)
          )
      }
    </Fragment>
  )
}
export default MembersEdit
