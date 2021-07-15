import React from 'react'
import {
    Link,
    Stack,
    Text,
    SimpleGrid
} from "@chakra-ui/react";

const Items = ({ titulo, array }) => {

    return (
        <Stack mt={0} px={0} align={'center'} fontSize={["md", "lg", "xl"]}>
       
            <Text fontWeight={'500'} fontSize={["sm", "md", "lg", "xl"]}  mb={2}>
                {titulo}
            </Text>
            <SimpleGrid columns={["1","2"]} spacing={2}>
            {
                array.map(item => (
                    <Text key={item.id} fontSize={["xs","sm", "md", "lg", "xl"]} mx={"auto"} >
                        <Link href={item.route}>
                            {item.name}
                        </Link>
                    </Text>
                ))
            }
            </SimpleGrid>
        </Stack>
    )
}

export default Items
