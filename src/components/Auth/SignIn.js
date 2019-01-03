import React from 'react';
import { connect } from 'react-redux';
import {logSuccessful} from '../../Actions/LogActions';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import "./SignIn.css"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isFetching: false
        }
    }
    render() {
        return (
                <Card className='card'>
                    <CardContent>
                        <Typography variant="display1">
                            Sign in
                        </Typography>
                                <TextField
                                    label="Login"
                                    value={this.state.username}
                                    onChange={e => this.setState({username: e.target.value})}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    label="Password"
                                    value={this.state.password}
                                    onChange={e => this.setState({password: +(e.target.value)})}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                    </CardContent>
                    <CardActions>
                        {(this.state.isFetching) ? <CircularProgress/> :
                            <Button variant="outlined" color='primary' onClick={() => {this.validateUser(this.state.username, this.state.password)}}>
                                Login</Button>}
                    </CardActions>
                </Card>
        )
    }
    validateUser(username, password) {
        let loadS = JSON.parse(localStorage.getItem('user'))
        if (loadS.username === username && loadS.password === password) {
            this.props.updateUser(loadS)
            this.setState({isFetching: true})
            const redirectToHome = () => {
                this.setState({isFetching: false})
                this.props.history.push("/profile")
            }
            setTimeout(redirectToHome, 5000)
        } else {
            alert('Username or password is incorrect')
        }
    }

}

const mapStateToProps = store => ({
        user: store.user
})

const mapDispatchToProps = dispatch => ({
    updateUser: payload => dispatch(logSuccessful(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)