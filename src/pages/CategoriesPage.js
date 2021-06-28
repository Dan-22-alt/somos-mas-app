import React from 'react';
import { Link } from "@chakra-ui/react"
import { Link as ReactLink} from "react-router-dom"
import { ListOfCategories } from '../backoffice/categories/ListOfCategories'

const LinkNew = () => (
  <Link
    mt='20px'
    display='flex'
    justifyContent='center'
    as={ReactLink}
    color="teal.500"
    to='/backoffice/categories/create'
  >
    Create New Category
  </Link>
)

export const CategoriesPage = () => {
  return (
    <>
      <LinkNew/>
      <ListOfCategories />
    </>
  )
}
