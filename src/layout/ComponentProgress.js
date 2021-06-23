import React, { Fragment } from 'react'
import { Progress } from "@chakra-ui/react"

const ComponentProgress = (props) => {
    return (
        <div>
            <Progress
                hasStripe
                value={props.val} 
                size="xs" 
                colorScheme="pink"
            />
        </div>
        
    )
}

export default ComponentProgress

