import * as actionTypes from '../actions/actionTypes'


const initState = {
    name: '',
    initialWeight: 0,
    actualWeight: 0,
    progress: 0,
    goal: 0,
    goalWeight: 0,
    initialDate: '',
    goalDate: '',
    height: 0,
    IMC: 0,
    range: 0,
    itemHistory: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.SET_NAME: 
            return {
                ...state,
                name: action.name
            }
        case actionTypes.SET_DATA:
            return {
                ...state,
                initialWeight: action.initialWeight,
                actualWeight: action.initialWeight,
                goal: action.initialWeight-action.goalWeight,
                goalWeight: action.goalWeight,
                initialDate: action.initialDate,
                goalDate: action.goalDate,
                IMC: action.initialWeight / (action.height * action.height),
                height: action.height,
                range: action.range
            }
        case actionTypes.UPDATE_WEIGHT:
            const dif = state.goal-(action.weight-state.goalWeight)
            return {
                ...state,
                actualWeight: action.weight,
                progress: (dif*100)/(state.initialWeight-state.goalWeight),
                IMC: action.weight/(state.height * state.height)
            }
        case actionTypes.HISTORY:
            return {
                ...state,
                itemHistory: {
                    ...state.itemHistory,
                    [action.id]: {
                        day: action.day,
                        month: action.month,
                        value: state.goal-(action.value-state.goalWeight)
                    }
                }
            }
        case actionTypes.ADD_TO_HISTORY:
            return {
                ...state,
                itemHistory: {
                    ...state.itemHistory,
                    [action.id]: {
                        ...state.itemHistory[action.id],
                        value: state.itemHistory[action.id].value + state.goal-(action.value-state.goalWeight)
                    }
                }
            }
        default:
            return state
    }
}

export default reducer