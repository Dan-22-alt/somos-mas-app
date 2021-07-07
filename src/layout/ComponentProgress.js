import React from 'react'
import { Progress } from "@chakra-ui/react"



const ComponentProgress = (props) => {
    return (
        <div>
            <Progress
                // agrega estilo rayado
                hasStripe
                // toma el valor de la prop val(value) que se envia desde el componente que lo renderiza para dibujar la barra proporcional
                value={props.val}
                // define el grosor de la barra de progreso
                size="xs"
                // define el color de relleno de la barra
                colorScheme='yellow'
            />
        </div>

    )
}

export default ComponentProgress

