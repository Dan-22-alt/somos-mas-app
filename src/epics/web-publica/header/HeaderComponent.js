import React, { Fragment } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Items from "./components/Items";
import Logo from "./components/Logo";
import ButtonLog from "./components/ButtonLog";
import { links } from "./utils/headerLinks";

import userIsLogged from "./../../../features/auth/userIsLogged";

const Header = ({organizationData})=> {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	// revisar esta funcion, o verificar de donde traer los datos de sesion
  //const logged = userIsLogged();

	const usuarioLog = true;

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding={1}
			bg="primary.400"
			color="white">
			<Flex align="center">
				<Logo img={organizationData?.logo}></Logo>
			</Flex>

			{usuarioLog ? (
				<Fragment>
					<Box
						display={{ base: "block", md: "none" }}
						onClick={handleToggle}>
						<HamburgerIcon />
					</Box>
					<Items array={links} isOpen={isOpen}></Items>
				</Fragment>
			) : (
				<ButtonLog isOpen={isOpen}></ButtonLog>
			)}
		</Flex>
	);
};

export default Header;
