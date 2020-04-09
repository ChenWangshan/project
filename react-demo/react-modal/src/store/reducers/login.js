import actionsTypes from '../actions/actionTypes'
import preloadState from '../preloadState'

function reducer (state = preloadState.login, action) {
    const { type, payload } = action;

    let newState;

    switch (type) {
        default:
            return state;
    }
}

export default reducer;
