import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }

        case REGISTRO_ERROR:
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }
        
        default:
            return state;
    }
}