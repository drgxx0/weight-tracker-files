import * as actionTypes from './actionTypes'

import moment from 'moment'


const monthArr = ['Ene', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const setName = (name) => {
    return {
        type: actionTypes.SET_NAME,
        name
    }
}

const range = (init, goal) => {
    const goalDate = new Date(goal)
    const a = moment(goalDate)
    const b = moment(init)
    return a.diff(b, 'days')
}

export const setData = (aWeight, gWeight, height, gDate) => {

    const convertDate = gDate.replace(/-/g, '/')

    const date = new Date();

    const newActualDate = `${date.getFullYear()}/${date.getMonth()+1 < 10 ? '0' : ''}${date.getMonth()+1}/${date.getDate()}`

    return {
        type: actionTypes.SET_DATA,
        initialWeight: aWeight,
        initialDate: newActualDate,
        goalWeight: gWeight,
        range: range(date, gDate),
        goalDate: convertDate,
        height
    }
}

export const updateWeight = (weight) => {
    return {
        type: actionTypes.UPDATE_WEIGHT,
        weight
    }
}

export const history = (value, itemHistory) => {
    const day = new Date().getDate()
    const month = monthArr[new Date().getMonth()]
    const id = new Date().getMilliseconds() * 12345

    const filter = Object.keys(itemHistory).filter(item => {
        return itemHistory[item].day === day
    })

    if(filter.length) {
        return {
            type: actionTypes.ADD_TO_HISTORY,
            id: filter[0],
            value
        }
    } else {
        return {
            type: actionTypes.HISTORY,
            id,
            day,
            month,
            value
        }
    }
}