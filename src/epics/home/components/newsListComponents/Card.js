import React from "react";
import { Box, Text, Image as ChakraImage } from "@chakra-ui/react";

export const Card = ({ image, name }) => {
    const height = ['12rem', '10rem', '12rem', '10rem']
    return (
        <Box>
            {image
                ? <Box
                    boxShadow="md"
                    d="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <ChakraImage
                        src={image}
                        h={height}
                        objectFit="cover"
                        w='100%'
                    />
                    <Box
                        h="2.75rem"
                        d="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="100%"
                    >
                        <Text
                            d="flex"
                            color="teal"
                        >
                            {name}
                        </Text>
                    </Box>
                </Box>
                : <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    h={height}
                    boxShadow='xs'
                    bg='gray.200'
                >
                    <Text >
                        La imagen no cargo
                    </Text>
                </Box>
            }
        </Box>
    )
}