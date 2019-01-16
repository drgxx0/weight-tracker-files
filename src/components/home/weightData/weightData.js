import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import * as Yup from "yup"

import Forms from 'components/forms/forms'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const WeightData = (props) => {

    const { classes, changeRoute, setData } = props

    const validationSchema = Yup.object({
        aWeight: Yup.number('Enter your actual weight')
        .min(30, 'Actual weight must be more than 30 kg')
        .typeError("Invalid weight")
        .required('Actual weight is required'),
        gWeight: Yup.number('Enter your goal weight')
        .min(50, 'Goal weight must be more than 50 kg')
        .typeError("Invalid weight")
        .required('Goal weight is required'),
        height: Yup.number('Enter your height')
        .typeError("Invalid height")
        .max(3, 'Height must be less than 3 M')
        .required('Height is required'),
        date: Yup.date('Select a goal date')
        .typeError("Invalid date")
        .min(`01/01/${new Date().getFullYear()}`)
        .max("01/01/2020")
        .required('A date is required')
    })

    return (
        <Grid item sm={3}>
            <Paper elevation={1} className={classes.root}>
                <Formik 
                render={(props) =><Forms changeRoute={changeRoute} setData={setData} weight {...props} />}
                validationSchema={validationSchema} />
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(WeightData)