import { Td, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CategoriesService } from '../../../services/CategoriesService';
import { CategoryButtons } from './CategoryButtons';

export const Category = ({ name, created_at, id }) => {
  const [thisCategory, setThisCategory] = useState(true);
  const [data, deleteApi] = CategoriesService.delete();

  const deleteCategory = () => {
    console.log(name, 'was deleted');
    console.log(data, 'was deleted');
    setThisCategory(false);
    deleteApi(id);
  };

  return (
    <Tr display={thisCategory ? 'table-row' : 'none'}>
      <Td px={[1, 5, 10, 10]}>{name}</Td>
      <Td textAlign="center" px={[1, 5, 10, 10]}>
        {created_at.replace(/T.*/, '')}
      </Td>
      <Td px={[1, 5, 10, 10]} display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
        <CategoryButtons id={id} deleteCategory={deleteCategory} />
      </Td>
    </Tr>
  );
};
