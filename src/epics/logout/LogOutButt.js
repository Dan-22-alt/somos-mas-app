import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Alert } from "../../components";

const LogOutButt = () => {

    const [alertOpen, setAlertOpen] = useState(false)

    const logOut = () => {
        setAlertOpen(true)
    }

    return (
        <>
            <Button
                variant="solid"
                colorScheme="teal"
                onClick={logOut}>
                Cerrar sesión
            </Button>
            <Alert
                isOpen={alertOpen}
                setIsOpen={setAlertOpen}
                //onConfirm={}  Logica para cerar sesion
                title="¿Desea cerrar sesión?"
                type="info"
                confirmButtonText="Cerrar"
                cancelButtonText="No"
                hasFeedback={true}
                feedbackTitle="Sesión cerrada"
                feedbackDuration={3000}
                feedbackType="info"
            />
        </>
    )
}

export default LogOutButt
