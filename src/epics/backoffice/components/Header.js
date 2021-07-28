import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Logo from '../../web-publica/footer/components/Logo';
import Sidebar from './Sidebar';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const logo = useSelector((state) => state.organization.data);
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
          <Logo img={logo.logo} />
        </Flex>
      </Flex>
      <Sidebar onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Header;
