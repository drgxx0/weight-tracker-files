import React, { Component } from 'react'

import Account from 'components/account/account'
import Graph from 'components/graph/graph'
import History from 'components/history/history'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
    return {
        root: {
            display: 'grid',
            height: '100%',
            backgroundColor: '#E6D7B2',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        item: {
            display: 'grid',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '10px'
        },
        paper: {
            padding: theme.spacing.unit * 3
        },
        center: {
            display: 'grid',
            justifyContent: 'center'
        }
    }
}

class Tracker extends Component {

    state = {
        IMCTable: [
            {
                id: 1,
                range: '<18,5',
                description: 'Underweight'
            },
            {
                id: 2,
                range: '18,5-24,9',
                description: 'Normal'
            },
            {
                id: 3,
                range: '25,0-29,9',
                description: 'Overweight'
            },
            {
                id: 4,
                range: '30,0-34,9',
                description: 'Obese grade I'
            },
            {
                id: 5,
                range: '35,0-39,9',
                description: 'Obese grade II'
            },
            {
                id: 6,
                range: '>40,0',
                description: 'Obese grade III'
            }
        ],
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({
            value
        })
        if(value === 0) {
            this.props.changeTrackerRoute('tracker')
        } else if (value === 1) {
            this.props.changeTrackerRoute('graph')
        } else if (value === 2) {
            this.props.changeTrackerRoute('history')
        }
    }

    render() {
        const { classes, initialWeight, initialDate, actualWeight, goalWeight, goalDate, progress, updateWeight, name, IMC, trackerRoute, range, history, itemHistory, changeRoute } = this.props
        const { value, IMCTable } = this.state
        return (
        <React.Fragment>
           <div className={classes.root}>
           <Button onClick={() => changeRoute('home')}>Back</Button>
           <Grid container direction="row" justify="center">
               <Grid item xs={12} md={12} >
                   <BottomNavigation 
                   value={value}
                   onChange={this.handleChange}
                   showLabels>
                   <BottomNavigationAction label="Account" icon={<i className="material-icons">
                   account_circle
                   </i>} />
                       <BottomNavigationAction label="Graph" icon={<i className="material-icons">
                       graphic_eq
                       </i>} />
                       <BottomNavigationAction label="History" icon={<i className="material-icons">
                       history
                       </i>} />
                   </BottomNavigation>
               </Grid>
           </Grid>
                <Paper elevation={3} style={{ width: '100%', justifySelf: 'center', alignSelf: 'center', padding: '15px'}}>
                    {trackerRoute === 'tracker' ? <Account initialWeight={initialWeight} initialDate={initialDate} actualWeight={actualWeight} goalWeight={goalWeight} goalDate={goalDate} progress={progress} updateWeight={updateWeight} name={name} IMC={IMC} IMCTable={IMCTable} history={history} itemHistory={itemHistory} /> : trackerRoute === 'graph' ? <Graph range={range} itemHistory={itemHistory} /> : trackerRoute === 'history' ? <History itemHistory={itemHistory} /> : null}
                </Paper>
           </div>
        </React.Fragment>
        )
    }
}

export default withStyles(styles)(Tracker)