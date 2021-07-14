import React from 'react'
import {
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";

const Items = ({ titulo, array }) => {

    return (
        <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                {titulo.titulo}
            </Text>
            {
                array.map(item => (
                    <Text key={item.id} fontSize="xl">
                        <Link href={item.route}>
                            {item.name}
                        </Link>
                    </Text>
                ))
            }
        </Stack>
    )
}

export default Items
