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
import { FiHome } from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Somos mas</DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              {/* Ejemplo de navegacion*/}
              <ListLink title="Inicio" icon={FiHome} to="/backoffice" onClick={onClose} />
              <ListLink title="Actividades" icon={IoNewspaperOutline} to="/backoffice/activities" onClick={onClose} />
              <ListLink title="Categorias" icon={IoNewspaperOutline} to="/backoffice/categories" onClick={onClose} />
              <ListLink title="Miembros" icon={IoNewspaperOutline} to="/backoffice/members" onClick={onClose} />
              <ListLink title="Novedades" icon={IoNewspaperOutline} to="/backoffice/news" onClick={onClose} />
              <ListLink title="Organizacion" icon={IoNewspaperOutline} to="/backoffice/organization" onClick={onClose} />
              <ListLink title="Slides" icon={IoNewspaperOutline} to="/backoffice/slides" onClick={onClose} />
              <ListLink title="Testimonios" icon={IoNewspaperOutline} to="/backoffice/testimonials" onClick={onClose} />
              <ListLink title="Usuarios" icon={IoNewspaperOutline} to="/backoffice/users" onClick={onClose} />
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
