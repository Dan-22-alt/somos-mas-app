import { Center, Table, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { CategoriesService } from '../../../services/CategoriesService';
import { Category } from './Category';

export const ListOfCategories = () => {
  const categories = CategoriesService.getList();
  return (
    <Center m="auto" mt="150px" mb="30px" w={['100%', '85%', '80%', '50%']} bg="gray.400">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Created at</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {categories?.res?.data.map((category) => (
            <Category key={category.name} {...category} />
          ))}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Created at</Th>
            <Th>Actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Center>
  );
};
