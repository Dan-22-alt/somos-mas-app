import React, { useState } from 'react'

import Alert from '../../components/alert/Alert'

import { Button } from '@chakra-ui/react'

const ButtDeleteSlide = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button m='2px' w='25vh'colorScheme="red" onClick={() => setIsOpen(true)}> 
                Eliminar
            </Button>

            <Alert 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title="Eliminando"
                description="¿Estas seguro que deseas eliminar este slide?" 
                type="error"
                hasFeedback= {true}
                feedbackTitle="Eliminado con exito!"
                feedbackDuration={3000}
            />
        </>
    )
}

export default ButtDeleteSlide