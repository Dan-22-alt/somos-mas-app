import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Items from './components/Items';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import { links } from './utils/headerLinks';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  // revisar esta funcion, o verificar de donde traer los datos de sesion
  // const logged = userIsLogged();

  // const usuarioLog = true;

  const organization = useSelector((state) => state.organization.data);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={1}
      color="gray.900"
      borderBottom="1px"
      borderBottomColor="gray.300"
      boxShadow="md"
      px={{ base: '4', md: '8', lg: '16' }}
    >
      <Logo img={organization.logo} alt={organization.name} />

      <div>
        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <HamburgerIcon />
          <Sidebar onClose={onClose} isOpen={isOpen} links={links} />
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Items array={links} />
        </Box>
      </div>
    </Flex>
  );
};

export default Header;
