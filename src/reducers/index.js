import {LOGGING, ERROR, FETCHING, INPUT_VALUE} from '../Constants/Constants'

export const initialState = {
    user: {
        username: 'Anonymous',
        password: ''
    },
    isLoggedIn: false,
    newsItems: [
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        }
    ],
    errors: {
        message: '',
        isShown: false
    },
    isFetching: false,
    loginInput: '',
    passwordInput: ''
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGING.LOG_SUCCESSFUL:
            return { ...state, user: action.payload, isLoggedIn: true }
        case ERROR.ERROR_SHOWN:
            return {...state, errors: action.payload}
        case ERROR.ERROR_HIDDEN:
            return{...state, errors: {message: '', isShown: false}}
        case FETCHING.IS_FETCHING:
            return{...state, isFetching: action.payload}
        case FETCHING.IS_NOT_FETCHING:
            return{...state, isFetching: action.payload}
        case INPUT_VALUE.LOGIN_CHANGE:
            return{...state, loginInput: action.payload}
        case INPUT_VALUE.PASSWORD_CHANGE:
            return{...state, passwordInput: action.payload}
        default:
            return state
    }
}