import React from "react";
import { HomeEditForm } from '../components/HomeEditForm/HomeEditForm'

export const HomePage = () => {
  const admin = true
  return (
    <>{admin && <HomeEditForm />}</>
  )
}
