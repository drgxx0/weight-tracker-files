import React, { Component } from 'react';
import { connect } from 'react-redux'

import Home from 'components/home/Home'
import Tracker from 'containers/Tracker'

import * as UIAction from 'store/actions/UIActions'
import * as dataAction from '../store/actions/dataActions'

import './App.css';

class App extends Component {

  state = {
    userCheck: false,
  }

  handleChangeRoute = (route, status) => {
    this.props.changeRoute(route)
    this.setState({
      userCheck: status,
    })
  }

  render() {

    const { route, setName, setData, initialWeight, initialDate, actualWeight, goalWeight, goalDate, progress, updateWeight, name, IMC, trackerRoute, changeTrackerRoute, range, history, itemHistory } = this.props

    const { userCheck } = this.state

    return (
      <React.Fragment>
        {route === 'tracker' ? <Tracker initialDate={initialDate} initialWeight={initialWeight} actualWeight={actualWeight} goalWeight={goalWeight} goalDate={goalDate} progress={progress} updateWeight={updateWeight} name={name} IMC={IMC} trackerRoute={trackerRoute} changeTrackerRoute={changeTrackerRoute} range={range} history={history} itemHistory={itemHistory} changeRoute={this.handleChangeRoute} /> : <Home changeRoute={this.handleChangeRoute} setName={setName} userCheck={userCheck} route={route} setData={setData} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    route: state.ui.route,
    initialWeight: state.data.initialWeight,
    actualWeight: state.data.actualWeight,
    goalWeight: state.data.goalWeight,
    initialDate: state.data.initialDate,
    goalDate: state.data.goalDate,
    progress: state.data.progress,
    name: state.data.name,
    IMC: state.data.IMC,
    trackerRoute: state.ui.trackerRoute,
    range: state.data.range,
    itemHistory: state.data.itemHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeRoute: (route) => dispatch(UIAction.changeRoute(route)),
    setName: (name) => dispatch(dataAction.setName(name)),
    setData: (aWeight, gWeight, height, gDate) => dispatch(dataAction.setData(aWeight, gWeight, height, gDate)),
    updateWeight: (weight) => dispatch(dataAction.updateWeight(weight)),
    changeTrackerRoute: (route) => dispatch(UIAction.changeTrackerRoute(route)),
    history: (value, itemHistory) => dispatch(dataAction.history(value, itemHistory))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
