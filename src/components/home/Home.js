import React from 'react';

import HomeEntry from './homeEntry/homeEntry'
import UserData from './userData/userData'

import Grid from '@material-ui/core/Grid';
import WeightData from './weightData/weightData';

const Home = ({ changeRoute, route, userCheck, setName, setData }) => {

    return (
      <React.Fragment>
        <Grid item sm={12} style={{ backgroundColor: '#E6D7B2', padding: '20px' }}>
          {userCheck ? <i className="material-icons" style={{fontSize: '40px', cursor: 'pointer'}} onClick={route === 'user' ? () => changeRoute('home', false) : route === 'weight' ? () => changeRoute('user', true) : null}>arrow_back</i> : null}
        </Grid>
        <Grid 
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: '100%', backgroundColor: '#E6D7B2' }}
        >
                {route === 'home' ? <HomeEntry changeRoute={changeRoute} /> :
                route === 'user' ? 
                    <UserData changeRoute={changeRoute} setName={setName} />
                : route === 'weight' ? 
                    <WeightData changeRoute={changeRoute} setData={setData} />
                : null}
        </Grid>
      </React.Fragment>
    );
  }

export default Home;