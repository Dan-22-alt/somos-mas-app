import { Box, Flex, IconButton, useDisclosure, Container, Image } from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const organization = useSelector((state) => state.organization.data);

  return (
    <>
      <Box>
        <Flex
          bg="white"
          color="gray.600"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor="gray.200"
          align={'center'}
          justify="space-between"
        >
          <Flex ml={{ base: -2 }}>
            <IconButton onClick={onOpen} icon={<FiMenu />} variant={'ghost'} aria-label={'Toggle Navigation'} />
          </Flex>
          <Flex >
            <Container>
              <Image src={organization.logo} alt={organization.name} h="70px" d="flex"/>
            </Container>
          </Flex>
        </Flex>
      </Box>
      <Sidebar onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Header;
