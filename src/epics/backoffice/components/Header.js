import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import Logo from '../../web-publica/header/components/Logo';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const organization = useSelector((state) => state.organization.data);

  return (
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
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }}>
          <IconButton onClick={onOpen} icon={<FiMenu />} variant={'ghost'} aria-label={'Toggle Navigation'} />
        </Flex>
        <Flex flex={{ base: 1 }}>
          <Logo img={organization.logo} alt={organization.name} />
        </Flex>
      </Flex>
      <Sidebar onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Header;
