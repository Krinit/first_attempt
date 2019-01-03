import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {logOut} from "../../Actions/LogActions";

class Logout extends React.Component {
    render() {
        return (
            <Button onClick={this.logoutUser} color="inherit">Logout</Button>
        )
    }
     logoutUser() {
         this.props.logOutUser({
             username: '',
             password: '',
             isLoggedIn: false})
         this.props.history.push("/");
     }
}

const mapDispatchToProps = dispatch => ({
    logOutUser: payload => dispatch(logOut(payload))
})

export default withRouter(connect(mapDispatchToProps)(Logout))


