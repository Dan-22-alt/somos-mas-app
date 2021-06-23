import React from 'react';
import { Spinner } from "@chakra-ui/react"

const Spinners = () => {
    return ( 
        <Spinner
            label="Cargando"
            thickness="5px"
            speed="0.55s"
            emptyColor="gray.200"
            color="purple"
            size="xl"
        />
     );
}
 
export default Spinners;