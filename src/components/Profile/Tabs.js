import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root} style={{'marginTop': '10px', 'marginRight': '10px'}}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Personal Info" />
                        <Tab label="About me" />
                        <Tab label="Preferences" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                        <strong>Name:</strong> Kirito<br/>
                        <strong>Surname:</strong> McAlister<br/>
                        <strong>Age:</strong> 28 years<br/>
                        <strong>Birth place:</strong> NY<br/>
                        <strong>Current place:</strong>Miami<br/>
                        <strong>Relationship:</strong> Married to Asuna
                </TabContainer>}
                {value === 1 && <TabContainer>
                    Believe or not, I`m fond of drinking. Really. But don`t try to seduce me by these cheap brands that are
                    so popular among the homeless. Nope, I`m not this kind of drinkers. I prefer to satisfy my needs with something that has its own story.
                    Story that starts at least 12 years ago, if you know what I mean. No less. So, if you are ready to waste some money, I will accompany
                    you in your journey to get drunk.
                </TabContainer>}
                {value === 2 && <TabContainer>
                    <strong>Drinks:</strong> Johnnie Walker Green and
                    Black Labels, Glenlivet Nadurra first fill selection, Black Velvet, Glenfiddich 18 Years Old.<br/>
                        <strong>AA Clubs:</strong> "The last chance", "No more bottles",
                        "Forgiveness is all". <br/>
                        <strong>Police Departments:</strong> NYPD on the 1st avenue, in Downtown on
                        ChelsyStr.
                    </TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
