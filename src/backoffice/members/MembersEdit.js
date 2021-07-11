import React, { Fragment } from 'react'
import './stylesMembers.css'
import { useParams } from 'react-router-dom'
import FormMembersEdit from './FormMembers'
import { useState, useEffect } from 'react';
import ComponentSkeleton from './../../layout/ComponentSkeleton';
import { getMember} from '../../services/membersService'

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
      setReady(false)
      console.error(error);
      setError(true)
    })
  }, [])
  return (
    <Fragment>
      {
        ready ?
          (
            member.name ?
              (<FormMembersEdit data={member} mode={"edit"} />)
              :
              (null)
          )
          :
          (
            !error ?
              (<div className="contenedorMemberEditSkeleton margin-auto">
                <ComponentSkeleton />
              </div>)
              :
              (<span> ESTE MIEMBRO NO EXISTE - ERROR 404</span>)
          )
      }
    </Fragment>
  )
}
export default MembersEdit
