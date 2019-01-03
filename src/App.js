import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import AppBar from './components/Header/Header'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'
import NewsTable from './components/News/NewsTable'
import Profile from './components/Profile/Profile'
import PrivateRoute from './components/Profile/Protected'
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        const { user } = this.props
        return (
            <BrowserRouter>
                <div className="App">
                    <AppBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/news" exact component={NewsTable}/>
                        <PrivateRoute isLoggedIn={user.isLoggedIn} path="/profile" exact component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = store => ({
    user: store.user
})


export default connect(mapStateToProps)(App);
