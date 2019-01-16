import * as actionTypes from './actionTypes'


export const changeRoute = (route) => {
    return {
        type: actionTypes.ROUTE,
        route
    }
}

export const changeTrackerRoute = (route) => {
    return {
        type: actionTypes.TRACKER_ROUTER,
        route
    }
}