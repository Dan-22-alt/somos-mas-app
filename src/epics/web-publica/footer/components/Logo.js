import React from 'react'
import { Box, Image } from "@chakra-ui/react"

const Logo = (img) => {
    return (
        <Box p={0} mx={"auto"} align="center">
            <Image
                objectFit="cover"
                width="20vw"
                alt="Logo"
                src={img.img} />                
        </Box>
    )
}
export default Logo
