import React from 'react'

import Grid from '@material-ui/core/Grid';

const HistoryItem = ({ value, day, month }) => {

    const bad = () => {
        if(Math.sign(value) === 1) {
            return false
        } else if (Math.sign(value) === -1) {
            return true
        }
    }

    return (
        <Grid container direction='row' justify='flex-start' style={{borderBottom: '1px solid gray'}}>
            <Grid item xs={3} md={3}>{day} {month}</Grid>
            <Grid item xs={9} md={9} style={bad() ? {display: 'grid', justifyContent: 'flex-end', color: 'red'} : {display: 'grid', justifyContent: 'flex-end', color: 'green'}}>{value.toFixed(2)} Kg</Grid>
        </Grid>
    )
}

export default HistoryItem