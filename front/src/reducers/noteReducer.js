import { types } from "../types/types"

const initialState = {
    notes: [],
    activeNote: null
}

export const noteReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case types.noteLoad: ({
            ...state,
            notes : action.payload
        })

        case types.noteActive: ({
            ...state,
            activeNote : action.payload
        })

        case types.noteAddNew: ({
            ...state,
            notes : [ ...state, action.payload ]
        })

        case types.noteUpdate:
            return {
                ...state,
                notes: state.notes.map( (note) => (
                    note.id === action.payload.id
                        ? action.payload
                        : note
                ))
            }

        case types.noteDelete:({
            ...state,
            notes : state.notes.filter( (note) => note.id !== action.payload.id )
        })
        
        default:
            return state
    }
    
}