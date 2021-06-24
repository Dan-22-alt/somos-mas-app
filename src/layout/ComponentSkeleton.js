import React, {Fragment} from 'react'
import { SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react"

const ComponentSkeleton = () => {
    return (
       <Fragment>
            <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
       </Fragment>
    )
}

export default ComponentSkeleton
