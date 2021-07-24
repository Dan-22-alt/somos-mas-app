import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const ListLink = ({ title, to, icon, onClick }) => {
  return (
    <ListItem>
      <ListIcon as={icon} color="gray.500" />
      <Link to={to} onClick={onClick}>
        {title}
      </Link>
    </ListItem>
  );
};

const Sidebar = ({ onClose, isOpen, links }) => {
  const organization = useSelector((state) => state.organization.data);

  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Logo img={organization.logo} alt={organization.name} />
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              {/* Ejemplo de navegacion*/}

              {links.map((link) => {
                return <ListLink key={link.id} title={link.name} icon={link.icon} to={link.route} onClick={onClose} />;
              })}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
