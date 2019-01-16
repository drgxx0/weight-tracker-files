import React from 'react'

import HistoryItem from './historyItem'

import Grid from '@material-ui/core/Grid';

const History = ({ itemHistory }) => {

    const map = Object.keys(itemHistory).map(item => {
        return <HistoryItem value={itemHistory[item].value} day={itemHistory[item].day} month={itemHistory[item].month} key={item} />
    })

    return (
        <React.Fragment>
            <Grid container direction='row' justify='flex-start' spacing={16} style={{height: '50vh', widht: '100%'}}>
                <Grid item xs={12} md={12}>
                    {map.length ? map: <p style={{display: 'grid', justifyContent: 'center'}}>There is not history yet</p>}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default History