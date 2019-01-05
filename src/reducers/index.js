import {LOGGING} from '../Constants/Constants'

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
    ]
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGING.LOG_SUCCESSFUL:
            return { ...state, user: action.payload, isLoggedIn: true }
        default:
            return state
    }
}