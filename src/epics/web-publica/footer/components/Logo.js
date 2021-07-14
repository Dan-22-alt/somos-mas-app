import React from 'react'
import { Box, Image } from "@chakra-ui/react"

const Logo = (img) => {
    return (
        <Box>
            <Image
                objectFit="cover"
                width="25vw"
                mr={5}
                alt="Logo"
                src={img.img} />                
        </Box>
    )
}
export default Logo
