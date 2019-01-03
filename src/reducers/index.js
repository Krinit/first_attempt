import {LOGGING} from '../Constants/Constants'

export const initialState = {
    user: {
        username: '',
        password: '',
        isLoggedIn: false
    }
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGING.LOG_SUCCESSFUL:
            return { ...state, user: action.payload }
        default:
            return state
    }
}