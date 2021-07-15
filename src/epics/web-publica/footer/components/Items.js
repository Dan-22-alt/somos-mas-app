import React from 'react'
import {
    Link,
    Stack,
    Text,
    SimpleGrid
} from "@chakra-ui/react";

const Items = ({ titulo, array }) => {

    return (
        <Stack mt={0} align={'center'}>
       
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                {titulo}
            </Text>
            <SimpleGrid columns={2} spacing={5}>
            {
                array.map(item => (
                    <Text key={item.id} fontSize="sm" >
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
