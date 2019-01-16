import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginTop: theme.spacing.unit * 2
  }
});

class Forms extends Component {

  nameRef = React.createRef()

  aWeightRef = React.createRef()
  gWeightRef = React.createRef()
  gDateRef = React.createRef()
  heightRef = React.createRef()

  handleSubmition = () => {
    if(this.props.user) {
      this.props.setName(this.nameRef.current.value)
      this.props.changeRoute('weight', true)
    } else if (this.props.weight) {
        if(this.aWeightRef.current.value < this.gWeightRef.current.value) {
          this.aWeightRef.current.focus()
          this.aWeightRef.current.value = null
          this.gWeightRef.current.value = null
        } else {
          this.props.changeRoute('tracker', false)
          this.props.setData(this.aWeightRef.current.value, this.gWeightRef.current.value,this.heightRef.current.value, this.gDateRef.current.value)
        }
    }
  }

  render() {

    const { classes, user, weight, errors, touched, handleChange, isValid, setFieldTouched } = this.props

    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    }

    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.handleSubmition()
        }}>
          {user ? 
          <React.Fragment>
            <TextField
              required
              id="name"
              name="name"
              helperText={touched.name ? errors.name : ""}
              error={touched.name && Boolean(errors.name)}
              onChange={change.bind(null, "name")}
              label="Name"
              variant="outlined"
              inputRef={this.nameRef}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={!isValid}
            >
              Submit
            </Button>
          </React.Fragment>
           : weight ?
          <React.Fragment>
            <TextField
              required
              id="aWeight"
              name="aWeight"
              helperText={touched.aWeight ? errors.aWeight : ""}
              error={touched.aWeight && Boolean(errors.aWeight)}
              onChange={change.bind(null, "aWeight")}
              label="Actual weight"
              variant="outlined"
              inputRef={this.aWeightRef}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              }}
            />
            <TextField
              required
              id="gWeight"
              name="gWeight"
              helperText={touched.gWeight ? errors.gWeight : ""}
              error={touched.gWeight && Boolean(errors.gWeight)}
              onChange={change.bind(null, "gWeight")}
              label="Goal weight"
              variant="outlined"
              className={classes.textField}
              fullWidth
              inputRef={this.gWeightRef}
              InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              }}
            />
            <TextField
              required
              id="height"
              name="height"
              helperText={touched.height ? errors.height : ""}
              error={touched.height && Boolean(errors.height)}
              onChange={change.bind(null, "height")}
              label="Height"
              variant="outlined"
              className={classes.textField}
              inputRef={this.heightRef}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">M</InputAdornment>,
              }}
            />
            <TextField
              required
              id="date"
              name="date"
              helperText={touched.date ? errors.date : ""}
              error={touched.date && Boolean(errors.date)}
              onChange={change.bind(null, "date")}
              label="Goal Date"
              type="date"
              variant="outlined"
              className={classes.textField}
              inputRef={this.gDateRef}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={!isValid}
            >
              Submit
            </Button>
          </React.Fragment> : null }
      </form>
    )
  }
}

export default withStyles(styles)(Forms)