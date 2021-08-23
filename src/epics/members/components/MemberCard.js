import React, {useState} from 'react';
import { Avatar, Box, Button, Center, Heading, Stack } from '@chakra-ui/react';
import Alert from '../../../components/alert/Alert';

const MemberCard = ({ name, image, id, handleDelete, handleEdit }) => {

  const [isOpen, setIsOpen] = useState(false)

  const deleteMember = () => {
    handleDelete(id)
  }

  return (
    <Center py={6}>
      <Box w="full" bg="white" boxShadow="lg" rounded="base" p={6} textAlign="center">
        <Avatar size="xl" src={image} alt="Avatar Alt" mb={4} pos="relative" />
        <Heading fontSize="2xl" fontFamily="body">
          {name}
        </Heading>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            onClick={() => setIsOpen(true)}
            flex={1}
            color="white"
            bg="red.500"
            _hover={{
              bg: 'red.600',
            }}
          >
            Eliminar
          </Button>

          <Alert
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={deleteMember}
        title="Eliminando"
        description="¿Estas seguro que deseas eliminar este miembro?"
        type="error"
      />

          <Button
            onClick={() => handleEdit(id)}
            flex={1}
            bg="primary.400"
            color="white"
            _hover={{
              bg: 'primary.300',
            }}
          >
            Editar
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default MemberCard;
