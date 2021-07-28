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
import { 
  IoNewspaperOutline, 
  IoTennisballOutline, 
  IoStorefrontOutline, 
  IoReaderOutline, 
  IoPeopleOutline, 
  IoPersonCircleOutline,
  IoImagesOutline,
  IoHomeOutline,
  IoHomeSharp,
  IoChatbubblesOutline
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LogOutButt from '../../logout/LogOutButt';
import Logo from '../../web-publica/header/components/Logo';
import { useSelector } from 'react-redux';

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

const Sidebar = ({ onClose, isOpen }) => {

  const organization = useSelector((state) => state.organization.data);

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <LogOutButt />
        </DrawerHeader>
          <DrawerHeader borderBottomWidth="1px">
            <Logo img={organization.logo} alt={organization.name} />
          </DrawerHeader>
          <DrawerHeader borderBottomWidth="1px">
            <List spacing={3}>
              <ListLink title="Inicio Publico" icon={IoHomeSharp} to="/" onClick={onClose} />
            </List>
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              <ListLink title="Inicio Administrador" icon={IoHomeOutline} to="/backoffice" onClick={onClose} />
              <ListLink title="Actividades" icon={IoTennisballOutline} to="/backoffice/activities" onClick={onClose} />
              <ListLink title="Categorias" icon={IoReaderOutline} to="/backoffice/categories" onClick={onClose} />
              <ListLink title="Miembros" icon={IoPeopleOutline} to="/backoffice/members" onClick={onClose} />
              <ListLink title="Novedades" icon={IoNewspaperOutline} to="/backoffice/news" onClick={onClose} />
              <ListLink title="Organizacion" icon={IoStorefrontOutline} to="/backoffice/organization" onClick={onClose} />
              <ListLink title="Slides" icon={IoImagesOutline} to="/backoffice/slides" onClick={onClose} />
              <ListLink title="Testimonios" icon={IoChatbubblesOutline} to="/backoffice/testimonials" onClick={onClose} />
              <ListLink title="Usuarios" icon={IoPersonCircleOutline} to="/backoffice/users" onClick={onClose} />
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
