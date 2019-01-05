import React from 'react';
import { connect } from 'react-redux';
import ErrorSnackBar from '../Error'
import {logSuccessful, errorShown, isFetching, isNotFetching, changeLoginValue, changePasswordValue} from '../../Actions/Actions';
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
        this.state = {}
    }
    render() {
        return (
            <div>
                <Card className='card'>
                    <CardContent>
                        <Typography variant="display1">
                            Sign in
                        </Typography>
                                <TextField
                                    label="Login"
                                    defaultValue=''
                                    onChange={e => this.props.changeLoginValue(e.target.value)}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    label="Password"
                                    defaultValue=''
                                    onChange={e => this.props.changePasswordValue(+e.target.value)}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                    </CardContent>
                    <CardActions>
                        {this.props.isFetching ? <CircularProgress/> :
                            <Button variant="outlined" color='primary' onClick={() => {this.validateUser(this.props.loginInput, this.props.passwordInput)}}>
                                Login</Button>}
                    </CardActions>
                </Card>
                <ErrorSnackBar/>
            </div>
        )
    }
    validateUser(username, password) {
        let loadS = JSON.parse(localStorage.getItem('user'))
        const userFilter = loadS.filter((user) => {
            return (user.username === username && user.password === password) ? user : null
        })
        if (userFilter.length > 0) {
            this.props.updateUser(userFilter[0])
            this.props.onFetching(true)
            const redirectToHome = () => {
                this.props.notFetching(false)
                this.props.history.push("/profile")
            }
            setTimeout(redirectToHome, 3000)
        } else {
            this.props.errorIsShown({
                message:'Username or password is incorrect',
                isShown: true})
        }
    }

}

const mapStateToProps = store => {
    return {
        user: store.user,
        isLoggedIn: store.isLoggedIn,
        isFetching: store.isFetching,
        loginInput: store.loginInput,
        passwordInput: store.passwordInput
    }
}


const mapDispatchToProps = dispatch => ({
    updateUser: payload => dispatch(logSuccessful(payload)),
    errorIsShown: payload => dispatch(errorShown(payload)),
    onFetching: payload => dispatch(isFetching(payload)),
    notFetching: (payload) => dispatch(isNotFetching(payload)),
    changeLoginValue: (payload) => dispatch(changeLoginValue(payload)),
    changePasswordValue: (payload) => dispatch(changePasswordValue(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)