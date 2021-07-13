import React from 'react'
import { Text, Link, Stack } from "@chakra-ui/react"
import { Fragment } from 'react';

const Items = ({ array, isOpen }) => {

    return (
        <Fragment>
            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                {
                    array.map(item => (
                        <Text key={item.id}>
                            <Link href={item.route}>
                                {item.name}
                            </Link>
                        </Text>
                    ))
                }
            </Stack>
        </Fragment>

    )
}

export default Items
