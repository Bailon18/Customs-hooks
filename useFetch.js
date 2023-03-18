import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [estado, setestado] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setestado({
            ...estado,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();
        
        setestado({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data: estado.data,
        isLoading: estado.isLoading,
        hasError: estado.hasError, 
    };
}
