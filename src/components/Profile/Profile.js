import React from 'react'
import './Profile.css'
import Tabs from './Tabs'
import Grid from '@material-ui/core/Grid'

const profile = () => {
    return (
        <div>
            <Grid container
                  direction='row'>
                <Grid item xs={6} className='imgContainer'>
                    <img className='avatar' alt='' src='https://imgix.ranker.com/user_node_img/50083/1001652678/original/i-and-_39_d-rather-die-alongside-them-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces' />
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction='column'>
                        <Grid item xs={12}>
                            <Tabs className='tabs'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default profile