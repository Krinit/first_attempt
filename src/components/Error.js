import React from 'react'
import {connect} from 'react-redux'
import {errorHidden} from '../Actions/Actions';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

class ErrorSnackBar extends React.Component {
    render() {
        return (
            <Snackbar
                className='snackBar'
                open={this.props.errors.isShown}
                autoHideDuration={4000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'snackbar-fab-message-id'
                }}
                message={<span>{this.props.errors.message}</span>}
                action={
                    <Button color="inherit" size="small" onClick={this.props.errorIsHidden}>
                        Close
                    </Button>
                }
            />
        )
    }
}

const mapStateToProps = store => ({
    errors: store.errors
})

const mapDispatchToProps = dispatch => ({
    errorIsHidden: () => dispatch(errorHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackBar)