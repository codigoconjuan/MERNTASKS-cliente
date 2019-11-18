import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
            { nombre: 'Elegir Colores', estado: false, proyectoId: 1},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3}
        ],
        tareasproyecto: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;