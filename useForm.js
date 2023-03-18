import { useState } from "react";

export const useForm = ( formularioinicial ) => {

    const [formularioEstado, setformularioEstado] = useState( formularioinicial );

    const onCambioInput = ( { target } ) => {
        const { name, value } = target;
        
        setformularioEstado( {
            ...formularioEstado,
            [ name ]: value
        })
    }

    const resetFormulario = () => {
        setformularioEstado( formularioinicial );
    }

    return {
        ...formularioEstado,
        formularioEstado,
        onCambioInput,
        resetFormulario,
    }
}
