import React from 'react'

import { Box } from "@chakra-ui/react";
import { SmartPicture } from './../../../components/Card/SmartPicture';
import Description from './../../nosotros/components/Description';

const NewsCardPublic = ({ data }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            w={[350]}
            pb="10px"
            boxShadow="lg"
            p='1rem'
        >
            <SmartPicture src={data.image} />
            <Box>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    fontSize="20px"
                    as="h4"
                    textAlign="center"
                    my="8px"
                    lineHeight="tight"
                    isTruncated
                >
                    {data.name}
                </Box>
                {data.content &&
                    <Box
                        mt="1"
                        fontSize="16px"
                        as="p"
                        textAlign="center"
                        my="8px"
                        lineHeight="tight"
                        isTruncated>
                        <Description text={data.content} ></Description>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default NewsCardPublic
