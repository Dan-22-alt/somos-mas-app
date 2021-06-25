import React from 'react'

import { Formik } from 'formik'
import { Container, Center } from "@chakra-ui/react"

const ComponentFormCategories = (props) => {
    return (
        <div>
            <Container marginTop="1.5%">
                <Center d="flex" flexDirection="column">
                    {props.match.params.id 
                    ? <h1>Formulario de EDICION</h1>
                    : <h1>Formulario de CREACION</h1>}
                    
                </Center>
            </Container>
        </div>
    )
}

export default ComponentFormCategories
