import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow'; 

import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
    return {
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

class Account extends Component {

    state = {
        weight: 0
    }

    render() {
        const { classes, initialWeight, initialDate, actualWeight, goalWeight, goalDate, progress, updateWeight, name, IMC, IMCTable, history, itemHistory } = this.props
        return (
            <React.Fragment>
                <Grid item xs={12} md={12} className={classes.center}><Paper elevation={0} className={classes.paper} style={{borderRadius: '5px', opacity: '0.7', border: '4px solid black', fontWeight: 'bold'}}>{name}</Paper></Grid>
                <Grid container direction='row' justify='flex-start' spacing={16}>
                    <Grid item xs={3} md={3} className={classes.item}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography component="h6" variant="h6" gutterBottom style={{fontSize: '16px'}}> 
                                {initialWeight}Kg
                            </Typography>
                            <Typography component="h6" variant="h6" style={{fontSize: '16px'}} gutterBottom>
                                Initial Weight
                            </Typography>
                        </Paper>
                    <p>{initialDate}</p>
                    </Grid>
                    <Grid item xs={6} md={6} className={classes.item}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography component="h6" variant="h6" gutterBottom> 
                                {Math.sign(progress) === -1 ? <span style={{color: 'red'}}>{actualWeight}Kg</span> : `${actualWeight}Kg`}
                            </Typography>
                            <Typography component="h6" variant="h6" gutterBottom>
                                Actual Weight
                            </Typography>
                            <Typography component="h6" variant="h6" gutterBottom>
                                {Math.sign(progress) === -1 ? <span style={{color: 'red'}}>{progress.toFixed(1)}%</span> : `${progress.toFixed(1)}%`}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} md={3} className={classes.item}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography component="h6" variant="h6" gutterBottom style={{fontSize: '16px'}}> 
                                {goalWeight}Kg
                            </Typography>
                            <Typography component="h6" variant="h6" gutterBottom style={{fontSize: '16px'}}>
                                Goal Weight
                            </Typography>
                        </Paper>
                        <p>{goalDate}</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.center}>
                    <TextField
                    required
                    id="outlined-name"
                    label="Weight"
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => {this.setState({weight: parseFloat(e.target.value)})}}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if(this.state.weight) {
                            updateWeight(this.state.weight)
                            history(this.state.weight, itemHistory)
                        }
                        }}
                    >
                    Today Weight
                    </Button>
                </Grid>
                <Grid item xs={12} style={{marginTop: '30px'}}>
                    <Typography component="h6" variant="h6" gutterBottom className={classes.center}>IMC</Typography>
                    <p className={classes.center}>Your IMC: {IMC.toFixed(0)}</p>
                    <Table>
                        <TableBody>
                            {IMCTable.map(item => {
                                return (
                                    <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        {item.range}
                                    </TableCell>
                                    <TableCell align="right">{item.description}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Account)