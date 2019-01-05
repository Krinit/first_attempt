import {LOGGING, FETCHING, ERROR, INPUT_VALUE} from '../Constants/Constants'

export function logSuccessful(payload) {
    return {
        type: LOGGING.LOG_SUCCESSFUL,
        payload
    }
}

export function errorShown(payload) {
    return {
        type: ERROR.ERROR_SHOWN,
        payload
    }
}

export function errorHidden(payload) {
    return {
        type: ERROR.ERROR_HIDDEN,
        payload
    }
}

export function isFetching(payload) {
    return {
        type: FETCHING.IS_FETCHING,
        payload
    }
}

export function isNotFetching(payload) {
    return {
        type: FETCHING.IS_NOT_FETCHING,
        payload
    }
}

export function changeLoginValue(payload) {
    return {
        type: INPUT_VALUE.LOGIN_CHANGE,
        payload
    }
}

export function changePasswordValue(payload) {
    return {
        type: INPUT_VALUE.PASSWORD_CHANGE,
        payload
    }
}
