import {LOGGING} from '../Constants/Constants'

export function logSuccessful(payload) {
    return {
        type: LOGGING.LOG_SUCCESSFUL,
        payload
    }
}
