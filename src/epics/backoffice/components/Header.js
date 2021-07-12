import React from "react";
import { Box, Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }}>
          <IconButton
            onClick={onOpen}
            icon={<FiMenu />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }}>
          <Text fontFamily={"heading"} color="gray.800">
            Somos mas
          </Text>
        </Flex>
      </Flex>
      <Sidebar onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Header;
