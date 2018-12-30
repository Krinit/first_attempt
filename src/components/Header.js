import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};
const headlineStyle = {
    'textDecoration': 'none',
    'color': '#2cc18a'
};
const links = [
    {title: 'Signin', path: 'signin'},
    {title: 'Signup', path: 'signup'},
    {title: 'Profile', path: 'profile'},
    {title: 'News', path: 'news'},
    {title: 'Logout', path: 'logout  '},
]

const ButtonAppBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{'backgroundColor': 'transparent', 'color': '#2cc18a'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Link to='/' style={headlineStyle}>WorldWideNews</Link>
                    </Typography>
                    {links.map((link, index) => {
                        return <Button key={index} component={Link} to={link.path} color="inherit">{link.title}</Button>
                    })}
                </Toolbar>
            </AppBar>
        </div>
    );
};

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
