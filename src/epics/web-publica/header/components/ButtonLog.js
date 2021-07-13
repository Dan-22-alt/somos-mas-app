import React from 'react'
import { Box, Button } from "@chakra-ui/react";

const ButtonLog = (isOpen) => {

    return (
        <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
    >
        <Button
            variant="outline"
            onClick={()=>{window.location.href = "/login"}}
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
            Ingresar
        </Button>
    </Box>
    )
}

export default ButtonLog
