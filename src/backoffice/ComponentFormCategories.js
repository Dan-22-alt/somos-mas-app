import React from 'react'

const ComponentFormCategories = (props) => {
    return (
        <div>
            {props.match.params.id 
            ? <h1>Formulario de EDICION</h1>
            : <h1>Formulario de CREACION</h1>}
                        
        </div>
    )
}

export default ComponentFormCategories
