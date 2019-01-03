import React from 'react';
import './Home.css'
import {setUser} from "../../Helpers/localStorage";
import Grid from '@material-ui/core/Grid';

export default class Home extends React.Component {
    componentDidMount() {
        setUser()
    }
    render () {
        return (
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
        )
    }
}

