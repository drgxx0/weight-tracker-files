import * as actionTypes from 'store/actions/actionTypes'


const initState = {
    route: 'home',
    trackerRoute: 'tracker'
}


const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.ROUTE:
            return {
                ...state,
                route: action.route
            }
        case actionTypes.TRACKER_ROUTER:
            return {
                ...state,
                trackerRoute: action.route
            }
        default:
            return state
    }
}

export default reducer