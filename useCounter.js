import { useState } from "react";

export const useCounter = ( valorInicial = 10) => {

    const [contador, setcontador] = useState( valorInicial );

    const incrementar = ( valor = 1 ) => {
        setcontador( contador + valor );
    }
    const decrementar = ( valor = 1 ) => {
        if ( contador === 0) return;
        setcontador( contador - valor );
    }
    const reset = () => {
        setcontador( valorInicial );
    }

    return {
        contador,
        incrementar,
        decrementar,
        reset,
    }
}
