import React from 'react'
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '200px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

const HomeEntry = ({ classes, changeRoute }) => {
    return (
        <React.Fragment>
            <Grid item sm={3}>
                <Typography component="h2" variant="h3" gutterBottom>
                    Weight tracker
                </Typography>
            </Grid>
            <Grid item sm={3} >
            <Button variant="contained" color="primary" className={classes.button} onClick={() => changeRoute('user', true)}>
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>
            </Grid>
        </React.Fragment>
    )
}

HomeEntry.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeEntry)