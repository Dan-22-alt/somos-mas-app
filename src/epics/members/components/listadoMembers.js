import React, { useState } from "react";
import { Box,Flex, Button,
	Heading,Stack,List, ListItem, ListIcon, MdCheckCircle,
	
	Avatar, MdSettings } from "@chakra-ui/react";
import { Alert } from "../../../components";

const ListMembers = () => {
    const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);

    const handleDelete = () => {
		setDeleteAlertIsOpen(true);
	};


    return ( 
      <h1>Prueba</h1>


     );
}
 
export default ListMembers;