import React from 'react'
import { Box, Button } from "@chakra-ui/react";

const ButtonLog = (isOpen) => {

    return (
        <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
    >
        <Button
            variant="solid"
            onClick={()=>{window.location.href = "/login"}}
            bg="primary.800"
            _hover={{ bg: "primary.200", borderColor: "primary.800" }}
        >
            Ingresar
        </Button>
    </Box>
    )
}

export default ButtonLog
