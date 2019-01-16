import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from "yup"

import Forms from 'components/forms/forms'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
  

const UserData = (props) => {
    const { classes, changeRoute, setName } = props

    const validationSchema = Yup.object({
        name: Yup.string('Enter your name')
        .matches(/^[A-Za-z]+$/, 'Name must have only letters')
        .required('Enter valid name')
    })

    return (
        <Grid item sm={3}>
            <Paper elevation={1} className={classes.root}>
                <Formik
                validationSchema={validationSchema} 
                render={(props) => <Forms changeRoute={changeRoute} setName={setName} user {...props} />} />
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(UserData)