import actionsTypes from '../actions/actionTypes'
import preloadState from '../preloadState'

const { 
    projects:{
        PROJECTS_GET_REDUX,
    }
} = actionsTypes;

function reducer (state = preloadState.projects, action) {
    const { type, payload } = action;

    let newState;

    switch (type) {
        case PROJECTS_GET_REDUX:
            return newState;
        default:
            return state;
    }
}

export default reducer;
