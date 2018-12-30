import React from 'react';
import './Home.css'
import Grid from '@material-ui/core/Grid';

const Home = () => (
    <div>
        <Grid container direction="column"
              justify="center"
              alignItems="center"
              className='headline'>
            <Grid item>
                <h1>Latest news here</h1>
            </Grid>
            <Grid item>
                <h3>Search for the topic you are interested in and go on!</h3>
            </Grid>
        </Grid>
    </div>
);

export default Home;