import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <DrawerHeader borderBottomWidth="1px">Somos Mas</DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              <ListLink
                title="Home ejemplo"
                icon={FiHome}
                to="/backoffice"
                onClick={onClose}
              />
              <ListLink
                title="Novedades ejemplo"
                icon={IoNewspaperOutline}
                to="/backoffice/news"
                onClick={onClose}
              />
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
