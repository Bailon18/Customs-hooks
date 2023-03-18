


export const todoReducer = ( estadoInicial, accion) => {
    
    switch (accion.type) {
        case '[TODO] Add Todo':
            return [ ...estadoInicial, accion.payload ];
        
        case '[TODO] Remove Todo':
            return estadoInicial.filter( todo => todo.id !== accion.payload ) ;
        default:
            return estadoInicial;
    }
    
}
